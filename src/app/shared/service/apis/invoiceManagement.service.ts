import {Injectable} from "@angular/core";
import { map, Observable} from "rxjs";
import { HttpServices } from "../http/http.service";
import { Constants } from "../../config/constants";

@Injectable()
export class InvoiceManagementService {
    constructor(
        private constants: Constants,
        private httpServices: HttpServices
    ) {
    }
    public addInvoice(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.ADD_INVOICE_ENDPOINT , data)
            .pipe(map(response => response));
    }
    public updateInvoice(id?: string, data?: Object,):Observable<any> {
        return this.httpServices.put(
            `${this.constants.ADD_INVOICE_ENDPOINT}/${id}` , data)
            .pipe(map(response => response));
    }
    public paymentProcessing(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.ADD_PAYMENT_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public upload(id: any, data?: any):Observable<any> {
        return this.httpServices.put(`${this.constants.ADD_VENDOR_DOC_ENDPOINT}/${id}`,data)
            .pipe(map(response => response))
    }
    // v1/ap-invoice?searchParameters=name&searchValues=pare&page=1&limit=1
    public filterInvoice( data?: any):Observable<any> {
        const url = `${this.constants.FILTER_INVOICE_ENDPOINT}searchParameters=${Object.keys(data)}&searchValues=${Object.values(data)}&page=1&limit=1`;
        return this.httpServices.get(url)
            .pipe(map(response => response))
    }

    public getInvoice():Observable<any> {
        const url = this.constants.GET_INVOICE_ENDPOINT;
        return this.httpServices.get(url)
            .pipe(map(response => response))
    }

    public docDownload(id: any):Observable<any> {
        return this.httpServices.get(`${this.constants.ADD_VENDOR_DOC_ENDPOINT}/${id}`)
            .pipe(map(response => response))
    }

}