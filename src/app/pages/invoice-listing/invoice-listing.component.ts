import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {InvoiceManagementService} from "../../shared";
import {CompanyService} from "../../shared";
import {ToastrService} from "ngx-toastr";
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {Router} from "@angular/router";

export interface PeriodicElement {
    vname: string;
    duedate: string;
    amount: string;
    pstatus: string;
    invoice: string;
}

/**
 * @title Table with pagination
 */
@Component({
    selector: 'app-account',
    templateUrl: './invoice-listing.component.html',
    styleUrls: ['./invoice-listing.component.scss']
})
export class AccountComponent {
    displayedColumns: string[] = ['vname', 'duedate', 'amount', 'pstatus', 'invoice'];

    // @ts-ignore
    public filterForm: FormGroup;

    ELEMENT_DATA: any;
    viewDiv: boolean = false;
    editDiv: boolean = false;
    listDiv: boolean = true;
    // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    dataSource = new MatTableDataSource;
    public companyList: any;
    public vendorList: any;
    public  storeList: any;
    constructor(
        private _liveAnnouncer: LiveAnnouncer,
        private companyService: CompanyService,
        private invoiceService: InvoiceManagementService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private router: Router
    ) {
        this.getVendor();
        this.getInvoice();

    }

    // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;


    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    getVendor() {
        this.companyService.getVendor()
            .subscribe(res => {
                if (res.code == "1") {
                    this.vendorList = res.results;
                }
            })
    }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(); // create new object
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.filterForm = this.formBuilder.group(
            {
                vendor_id: '',
                company_id: '',
                store_id: '',
            },
        );
        this.getCompanies()

    }

    search() {
        const isEmpty = Object.values(this.filterForm.value).every(x => x === null || x === '');
        if (isEmpty) {
            this.toastr.info('Please select at least one filter')
            return
        }
       this.filterInvoiceData()
    }

    filterInvoiceData() {
        this.invoiceService.filterInvoice(this.filterForm.value)
            .subscribe(res => {
                this.dataSource.data = res.results;
            })
    }

    getInvoice() {
        this.invoiceService.getInvoice()
            .subscribe(res => {
                if (res.code == '1'){
                    this.dataSource.data = res.results
                }
            })
    }

    findVendorName(id:string) {
        // @ts-ignore
      const details =  this.vendorList.find(item => item.vendorId == id);
        return details.name;
    }

    viewInvoice(id: string) {
        // this.viewDiv= true
        // this.listDiv = false
        this.router.navigate(['invoice-details', id])
        // this.companyService.getInvoiceDetails(id).subscribe(res=> {
        //     if (res.code === '1'){
        //         // this.editInvoiceForm.setValue({
        //         //     invoiceNumber: res.invoiceNumber
        //         // })
        //     }
        // });
    }

    editInvoice() {
        this.editDiv = true;
        this.viewDiv = false;
    }


    getCompanies() {
        this.companyService.getCompany().subscribe(res => {
            if (res.code == "1") {
                this.companyList = res.results;
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

}

