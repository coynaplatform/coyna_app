import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { CompanyService } from 'src/app/shared';


export interface PeriodicElement {
    sno: string;
    products: string;
    pos1: string;
    pos2: string;
    pos3: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {sno: 'Cname', products: 'service', pos1: 'Nagpur', pos2: 'sdfsdf', pos3: ''},
    {sno: 'Cname', products: 'service', pos1: 'Nagpur', pos2: 'sdfsdf', pos3: ''},
    {sno: 'Cname', products: 'service', pos1: 'Nagpur', pos2: 'sdfsdf', pos3: ''},
    {sno: 'Cname', products: 'service', pos1: 'Nagpur', pos2: 'sdfsdf', pos3: ''},
    {sno: 'Cname', products: 'service', pos1: 'Nagpur', pos2: 'sdfsdf', pos3: ''},
    {sno: 'Cname', products: 'service', pos1: 'Nagpur', pos2: 'sdfsdf', pos3: ''},
    {sno: 'Cname', products: 'service', pos1: 'Nagpur', pos2: 'sdfsdf', pos3: ''},
];

/**
 * @title Table with pagination
 */
@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanylComponent {
   displayedColumns: string[] = ['name', 'companyType', 'pos2', 'pos3'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    constructor(private _liveAnnouncer: LiveAnnouncer, private companyService: CompanyService) {
    }

    // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(){
        this.getCompanies()
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    getCompanies() {
        this.companyService.getCompany().subscribe(res => {
            if (res.code == "1") {
                this.dataSource.data = res.results;
            }
        })
    }

}
