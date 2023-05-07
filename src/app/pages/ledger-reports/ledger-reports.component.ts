import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';


export interface PeriodicElement {
    acc: string;
    aname: string;
    deb: string;
    cre: string;
    tdate: string;
    bal1: string;
    bal2: string;
    cur: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
    {acc: 'Vendor 01', aname: 'Food', deb: 'Food', cre: 'Food', tdate: '9980160026', bal1: 'Nagpur', bal2: '50,000', cur: 'INR'},
];

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-ledgerrep',
  templateUrl: './ledger-reports.component.html',
  styleUrls: ['./ledger-reports.component.scss']
})
export class LedgerrepComponent implements AfterViewInit {
    displayedColumns: string[] = ['acc', 'aname', 'deb', 'cre', 'tdate', 'bal1', 'bal2', 'cur'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    constructor(private _liveAnnouncer: LiveAnnouncer) {
    }

    // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;

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
}

