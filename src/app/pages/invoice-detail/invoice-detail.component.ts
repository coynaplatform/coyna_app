import {Component} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from "@angular/router";
import {Constants, InvoiceManagementService} from "../../shared";
import {BrowserDB} from "../../shared";
import {CompanyService} from "../../shared";
@Component({
    selector: 'app-invoiced',
    templateUrl: './invoice-detail.component.html',
    styleUrls: ['./invoice-detail.component.scss']
})
export class InvoicedComponent {
    constructor(
        private formBuilder: FormBuilder,
        private notification: ToastrService,
        private router: Router,
        private constants: Constants,
        private browser: BrowserDB,
        private service: CompanyService,
        private route: ActivatedRoute,
        private invoiceService: InvoiceManagementService
    ) {
        // this.getVendorDetails()
    }

    submitted = false;
    companyList: any;
    invoiceNumber: any = '';
    invoiceDate: any = '';
    dueDate: any = '';
    companyName: any = '';
    vendorName: any = '';
    store: any = '';
    amount: any = '';
    GSTPrice: any = '';
    additionalCharges: any = '';
    paymentTerm: any = '';
    totalAmount: any = '';
    paymentMethod: any = '';
    uploadInvoice: any = '';
    goodsDescription: any = '';
    editId : string | null = '';


    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.editId = params.get('id');
            this.service.getInvoiceDetails(this.editId).subscribe(res => {
                if (res.code == '1') {
                    const val = res.results;
                    console.log('?????', val.invoiceDate[0],val.invoiceDate[1],val.invoiceDate[2])
                    this.invoiceNumber = val.invoiceNumber;
                    this.invoiceDate = new Date(val.invoiceDate[0],val.invoiceDate[1],val.invoiceDate[2]);
                    this.dueDate = new Date(val.dueDate[0],val.dueDate[1],val.dueDate[2]);
                    this.companyName = val.companyName;
                    this.vendorName = val.vendorName
                    this.store = val.store;
                    this.amount = val.amount
                    this.GSTPrice = val.gstAmount
                    this.additionalCharges = val.addlAmount
                    this.paymentTerm = val.paymentTerm
                    this.totalAmount = val.totalAmount
                    this.paymentMethod = val.paymentMethod
                    this.uploadInvoice = this.getDownload(val.apInvoiceId)
                        this.goodsDescription = val.goodsDesc;
                }
            })
        });
    }


    onSubmit(): void {
        this.submitted = true;
    }

    getCompanies() {
        this.service.getCompany().subscribe(res => {
            if (res) {
                this.companyList = res.results;
                console.log('Res', res)
            }
        })
    }

    getDownload(id: string) {
        this.invoiceService.docDownload(id)
            .subscribe(res=> {
                if (res.code=== '1'){
                    console.log('>>>>>>> download', res)
                }
            })
    }

    editInvoice(){
      return   this.router.navigate(['invoice-edit', this.editId])
    }
}