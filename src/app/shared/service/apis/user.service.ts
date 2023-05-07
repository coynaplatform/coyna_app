import {Injectable} from "@angular/core";
import { map, Observable} from "rxjs";
import { HttpServices } from "../http/http.service";
import { Constants } from "../../config/constants";

@Injectable()
export class UserService {
//    headers = new HttpHeaders();
    constructor(
        private constants: Constants,
        private httpServices: HttpServices
    ) {
    }


    public userLogin(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.API_LOGIN_ENDPOINT , data, {observe: 'response'})
            .pipe(map(response => response));
    }

    public userProfile(data: Object):Observable<any> {
        return this.httpServices.put(
            this.constants.UPDATE_PROFILE_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public userRegister(data: Object):Observable<any> {
        return this.httpServices.post(
            '' , data)
            .pipe(map(response => response));
    }
    public tokenVerify(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.TOKEN_VERIFY_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public logOut():Observable<any> {
        return this.httpServices.get(
            this.constants.LOGOUT_ENDPOINT)
            .pipe(map(response => response));
        // @ts-ignore
    }

    public allSessionLogout(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.SESSION_LOGOUT_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public forgotPassword(data: Object):Observable<any> {
        return this.httpServices.post(
            this.constants.FORGOT_ENDPOINT , data)
            .pipe(map(response => response));
    }

    public getlanguage():Observable<any> {
        return this.httpServices.get(
            this.constants.API_LANGUAGE_ENDPOINT )
            .pipe(map(response => response));
    }

}