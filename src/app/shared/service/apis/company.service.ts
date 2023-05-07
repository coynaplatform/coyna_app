import {Injectable} from "@angular/core";
import { map, Observable} from "rxjs";
import { HttpServices } from "../http/http.service";
import { Constants } from "../../config/constants";

@Injectable()
export class CompanyService {
    // headers = new HttpHeaders();

    constructor(
        private constants: Constants,
        private httpServices: HttpServices
    ) {
    }

    // // @ts-ignore
    // headers = new HttpHeaders().set('Version', '1');
    // // @ts-ignore
    // headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem(this.constants.TOKEN)}`);
    // // @ts-ignore
    // headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');


    public companyRegister(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.API_ADD_COMPANY_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public addVendor(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.VENDOR_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public addFinance(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.API_FINANCE_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public addOperation(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.API_OPERATION_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public getCompany():Observable<any> {
        return this.httpServices.get(
            this.constants.API_GET_COMPANY_ENDPOINT )
            .pipe(map(response => response));
    }

    public getDepartment():Observable<any> {
        return this.httpServices.get(
            this.constants.API_DEPARTMENT_ENDPOINT )
            .pipe(map(response => response));
    }

    public vendorUpload(id: any, data?: any):Observable<any> {
        return this.httpServices.put(`${this.constants.ADD_VENDOR_DOC_ENDPOINT}/${id}`,data)
            .pipe(map(response => response))
    }
    public getVendor():Observable<any> {
        return this.httpServices.get(this.constants.GET_VENDOR_ENDPOINT)
            .pipe(map(response => response))
    }
    public filterVendor(data?: any, currentPage?: number, limit?: number):Observable<any> {
        const url = `${this.constants.GET_VENDOR_ENDPOINT}?
        searchParameters=${Object.keys(data)}&searchValues=${Object.values(data)}&page=${currentPage}&limit=${limit}`;

        return this.httpServices.get(url)
            .pipe(map(response => response))
    }
    public addExpense(data?: any):Observable<any> {
        return this.httpServices.post(this.constants.ADD_EXPENSE_ENDPOINT, data)
            .pipe(map(response => response))
    }

    public addTimeSheet(data?: any):Observable<any> {
        return this.httpServices.post(this.constants.ADD_TIME_SHEET_ENDPOINT, data)
            .pipe(map(response => response))
    }

    public addStore(data?: any):Observable<any> {
        return this.httpServices.post(this.constants.STORE_ENDPOINT, data)
            .pipe(map(response => response))
    }
    public getStore(id?: any):Observable<any> {
        return this.httpServices.get(this.constants.STORE_ENDPOINT+'/'+id)
            .pipe(map(response => response))
    }
    public getInvoiceDetails(id?: any):Observable<any> {
        return this.httpServices.get(this.constants.GET_INVOICE_ENDPOINT+'/'+id)
            .pipe(map(response => response))
    }




}