import {Component} from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {MatTableDataSource} from "@angular/material/table";
import {CompanyService, InvoiceManagementService} from "../../shared";
import * as moment from 'moment';
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-payment',
    templateUrl: './payment-processing.component.html',
    styleUrls: ['./payment-processing.component.scss']
})
export class PaymentComponent {
    constructor(
        private companyService: CompanyService,
        private invoiceService: InvoiceManagementService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService
    ) {
        this.getVendor();
        this.getInvoice();
    }

    // @ts-ignore
    public paymentForm: FormGroup;
    vendorList: any;
    paymentMethodList = [{name: 'Online', id: 1}, {name: 'Cash', id: 2}, {name: "Account Pay", id: 3}];
    submitted: boolean = false;
    invoiceList: any;
    invoiceNumber: any;
    apInvoiceId: any;
    invoiceDate: string = ''


    getVendor() {
        this.companyService.getVendor()
            .subscribe(res => {
                if (res.code == "1") {
                    this.vendorList = res.results;
                }
            })
    }

    submitPayment() {
        console.log(this.paymentForm.controls)
        this.submitted = true;
        if (this.paymentForm.invalid) return;
        const newObj = {
            "apInvoice": {
                "apInvoiceId": this.apInvoiceId,
                "invoiceNumber": this.invoiceNumber,
                "invoiceDate": new Date(this.paymentForm.value.invoiceDate)
            },
            "vendorId": this.paymentForm.value.vendorId,
            "paymentMode": this.paymentForm.value.paymentMode,
            "chequeNumber": this.paymentForm.value.chequeNumber,
            "amount": this.paymentForm.value.amount,
            "clearanceDate": new Date(this.paymentForm.value.clearanceDate),
            "paymentStatus": this.paymentForm.value.paymentStatus,
            "confirmation": this.paymentForm.value.confirmation,
            "approvalInfo": this.paymentForm.value.memo
        }
        this.invoiceService.paymentProcessing(newObj)
            .subscribe(res => {
                if (res.code == "1") {
                    this.toastr.success(res.message);
                    this.paymentForm.reset()
                    this.submitted = false;
                }
            })
    }

    getInvoice() {
        this.invoiceService.getInvoice()
            .subscribe(res => {
                if (res.code == '1') {
                    this.invoiceList = res.results
                }
            })
    }

    setInvoiceDate(val: any) {
        const data = val.value.split('|');
        this.invoiceDate = moment(new Date(data[1]).toISOString()).format('MM/DD/YYYY');
        this.paymentForm.patchValue({
            invoiceDate: moment(new Date(data[1]).toISOString()).format('MM/DD/YYYY'),
            amount: data[3]
        });
        // @ts-ignore
        this.paymentForm.controls.invoiceDate.setValue(moment(new Date(data[1]).toISOString()).format('MM/DD/YYYY'));
        this.invoiceNumber = data[2];
        this.apInvoiceId = data[0];
    }

    ngOnInit(): void {
        this.paymentForm = this.formBuilder.group(
            {
                vendorId: ['', [Validators.required]],
                paymentMode: ['', [Validators.required]],
                paymentStatus: ['', [Validators.required]],
                clearanceDate: ['', [Validators.required]],
                amount: ['', [Validators.required]],
                chequeNumber: ['', [Validators.required]],
                invoiceNumber: ['', [Validators.required]],
                invoiceDate: ['', [Validators.required]],
                confirmation: ['', [Validators.required]],
                memo: ['', []],
                apInvoiceId: ['']
            },
        );

    }


    get f(): { [key: string]: AbstractControl; } {
        return this.paymentForm.controls;
    }
}