import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';


export interface PeriodicElement {
    sno: string;
    w1: string;
    w2: string;
    w3: string;
    w4: string;
    w5: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
   {sno: 'Company Name', w1: 'Store Name', w2: '14424234', w3: 'Fullname', w4: 'abc@gmail.com', w5: 'Back Office Operations'},
   {sno: 'Company Name', w1: 'Store Name', w2: '14424234', w3: 'Fullname', w4: 'abc@gmail.com', w5: 'Back Office Operations'},
   {sno: 'Company Name', w1: 'Store Name', w2: '14424234', w3: 'Fullname', w4: 'abc@gmail.com', w5: 'Back Office Operations'},
   {sno: 'Company Name', w1: 'Store Name', w2: '14424234', w3: 'Fullname', w4: 'abc@gmail.com', w5: 'Back Office Operations'},
   {sno: 'Company Name', w1: 'Store Name', w2: '14424234', w3: 'Fullname', w4: 'abc@gmail.com', w5: 'Back Office Operations'},
   {sno: 'Company Name', w1: 'Store Name', w2: '14424234', w3: 'Fullname', w4: 'abc@gmail.com', w5: 'Back Office Operations'},
   {sno: 'Company Name', w1: 'Store Name', w2: '14424234', w3: 'Fullname', w4: 'abc@gmail.com', w5: 'Back Office Operations'},

];

/**
 * @title Table with pagination
 */
@Component({
    selector: 'app-operationl',
    templateUrl: './operation-listing.component.html',
    styleUrls: ['./operation-listing.component.scss']
})
export class OperationlComponent {
  displayedColumns: string[] = ['sno', 'w1', 'w2', 'w3', 'w4', 'w5'];
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
