import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';


export interface PeriodicElement {
    date: string;
    op: string;
    su: string;
    dd: string;
    amt: string;
    so: string;
    bal: string;
    com: string;
    edit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
    {date: 'Jan-05-2023', op: '4996.5', su: 'Supplier 01', dd: '3457', amt: 'Rs. 1.200', so: '125', bal: '500', com: 'Verified by Zohab', edit: 'Edit'},
];

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-dailysheet',
  templateUrl: './daily-sheet.component.html',
  styleUrls: ['./daily-sheet.component.scss']
})
export class DepdailysheetComponent implements AfterViewInit {
    displayedColumns: string[] = ['date', 'op', 'su', 'dd', 'amt', 'so', 'bal', 'com', 'edit'];
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

