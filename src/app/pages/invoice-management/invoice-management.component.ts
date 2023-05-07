import {Component} from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
import {Constants, InvoiceManagementService, UtilityHelper} from "../../shared";
import {BrowserDB} from "../../shared";
import {CompanyService} from "../../shared";

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice-management.component.html',
    styleUrls: ['./invoice-management.component.scss']
})
export class InvoiceComponent {
    // @ts-ignore
    public invoiceForm: FormGroup;
    public companyList: any;
    public vendorList: any;
    public invoiceDoc : any;
    public  storeList: any;

    // @ts-ignore
    gstAmount_1: number = '';
    // @ts-ignore
    addlAmount_1: number = '';
    // @ts-ignore
    amount_1: number = '';

    constructor(
        private formBuilder: FormBuilder,
        private notification: ToastrService,
        private router: Router,
        private constants: Constants,
        private browser: BrowserDB,
        private invoiceService: InvoiceManagementService,
        private companyService: CompanyService,
        private utility: UtilityHelper,
    ) {
        this.getCompanies();
        this.getVendor();
    }

    submitted = false;
    paymentMethodList = [{name: 'Online', id: 1}, {name: 'Cash', id: 2}, {name: "Account Pay", id: 3}];

    ngOnInit(): void {
        this.invoiceForm = this.formBuilder.group(
            {
                invoiceNumber: ['', [Validators.required]],
                companyId: ['', [Validators.required]],
                vendorId: ['', [Validators.required]],
                invoiceDate: ['', [Validators.required]],
                dueDate: ['', [Validators.required]],
                invoiceType: ['', []],
                totalAmount: ['',],
                amount: ['', [Validators.required]],
                addlAmount: ['', []],
                gstAmount: ['', []],
                paymentTerm: ['', [Validators.required]],
                paymentMethod: ['', [Validators.required]],
                goodsDesc: ['', []],
                uploadInvoice: ['', [Validators.required]],
                storeId: ['',[Validators.required]]
            },
        );
    }

    get f(): { [key: string]: AbstractControl; } {
        return this.invoiceForm.controls;
    }



    getCompanies() {
        this.companyService.getCompany().subscribe(res => {
            if (res.code == "1") {
                this.companyList = res.results;
            }
        })
    }

    getVendor() {
        this.companyService.getVendor()
            .subscribe(res => {
                if (res.code == "1") {
                    this.vendorList = res.results;
                }
            })
    }
    getStore(val: any) {
        const id = val.value;
        this.companyService.getStore(id)
            .subscribe(res => {
                if (res.code == "1") {
                    this.storeList = res.results;
                }
            })
    }

    onFileSelected(event: any) {
        if (event.target.files[0] !== undefined) {
            if (this.utility.fileSize(event.target, '60 KB'))
            this.invoiceDoc = event.target.files[0]
        }
    }


    saveInvoice() {
        this.submitted = true;
        if (this.invoiceForm.invalid) return;
        if (this.invoiceForm.value.amount == 0 || this.invoiceForm.value.amount == "0" || !this.invoiceForm.value.amount ) {
            console.log('error in amount')
        }

        delete this.invoiceForm.value.uploadInvoice;
        const newObj = {
            ...this.invoiceForm.value,
            totalAmount: this.invoiceForm.value.amount +  this.invoiceForm.value.gstAmount + this.invoiceForm.value.addlAmount ,
            dueDate: new Date(this.invoiceForm.value.dueDate),
            invoiceDate: new Date(this.invoiceForm.value.invoiceDate),
        }
        this.invoiceService.addInvoice(newObj)
            .subscribe(res => {
                if (res.code == "1") {
                    this.invoiceUpload(res.results);
                }
            })
    }

    invoiceUpload(id: any) {
        const formData = new FormData();
        formData.append('documents', this.invoiceDoc);
        this.invoiceService.upload(id, formData)
            .subscribe(response => {
                if (response.code == '1'){
                    this.submitted = false;
                    this.notification.success('Invoice created successfully');
                    this.invoiceForm.reset();
                    window.location.reload();
                }
            })
    }

}
