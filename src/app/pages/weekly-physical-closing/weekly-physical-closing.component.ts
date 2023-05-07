import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';


export interface PeriodicElement {
    sno: string;
    pro: string;
    w1: string;
    w2: string;
    w3: string;
    w4: string;
    w5: string;
    w6: string;
    w7: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},
    {sno: 'Jan-05-2023', pro: 'Supplier 01', w1: '2342', w2: '342', w3: '345', w4: '56', w5: '34', w6: '234', w7: '345'},

];

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-weeklypclose',
  templateUrl: './weekly-physical-closing.component.html',
  styleUrls: ['./weekly-physical-closing.component.scss']
})
export class WeeklypcloseComponent implements AfterViewInit {
    displayedColumns: string[] = ['sno','pro','w1','w2','w3','w4','w5','w6','w7'];
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

