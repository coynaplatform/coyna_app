import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';


export interface PeriodicElement {
    sno: string;
    products: string;
    pos1: string;
    pos2: string;
    pos3: string;
    pos4: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {sno: '#99', products: 'Fuel', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Gas', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Product Number 5', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Diesel', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'C-Store', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Dal', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Tobacco', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Lottery', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Fuel', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Cigarettes', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Fuel', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
    {sno: '#99', products: 'Fuel', pos1: 'Rs. 1.200', pos2: 'Rs. 1.200', pos3: 'Rs. 1.200', pos4: 'Rs. 1.200'},
];

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-accountrec',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.scss']
})
export class AccountrecComponent implements AfterViewInit {
    displayedColumns: string[] = ['sno', 'products', 'pos1', 'pos2', 'pos3', 'pos4'];
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

