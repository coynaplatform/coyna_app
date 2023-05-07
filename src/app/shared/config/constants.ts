import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable()
export class Constants {
  url:string = environment.gatewayURL;
  public readonly CIPHER_KEY = '112022$#@$^@1SAW';
  public readonly SET_TOKEN = 'STa2RVzaRkJVrthKHJXfy4Z9CswUJc';
  public readonly SET_USER_RESPONSE= 'r1@UIOPLKhjnKq18qtgaC'
  public  readonly REGEXP = {
    url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // charOnly: /^[a-zA-Z0-9]+(([ ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/,
    charOnlyWithSpecialCharacters: /^[ A-Za-z0-9_.,/*"#%!$()&+-]*$/,

    charOnly:/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    aToZ:/^[A-Za-z]+([A-Za-z]+)*$/,
    charOnly_1:/^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]\s{1}[a-zA-Z]{1,})$/,

    spaceRemove: /^(?![\s-])/g,
    pattern: /^[a-zA-Z0-9_|,\/?]*$/,
    number : /^[0-9]+$/i,
    alphanumWithQuestionMark: /^[a-zA-Z0-9_ ?]*$/,
    alphanum: /^[a-zA-Z0-9_ ]*$/,
    alphanumWithoutSpace: /^[a-zA-Z0-9_]*$/,
    alphanumWithoutSpaceAndHyphon: /^[a-zA-Z0-9]*$/,
    alphanumWithSpaceDot: /^[a-zA-Z0-9-._ ]*$/,
    curationDisplayNameAlphaNum: /^[\\\]?[a-zA-Z0-9_ !@#$%^&*()/|-]*$/
  };

  public readonly UPLOAD = {
    imageSizeInMB: 1,
    imageSize: 1 * 1048576,
    videoSizeInMB: 50,
    videoSize: 50 * 1048576,
    soundSizeInMB: 10,
    soundSize: 10 * 1048576
  };
  public readonly END_POINT_FOR_MULTIPART: string[] =['document', 'image'];

  public readonly API_FETCH_COUNTRY: string = 'https://countriesnow.space/api/v0.1/countries/positions'
  public readonly API_FETCH_STATE: string = 'https://countriesnow.space/api/v0.1/countries/states'
  public readonly API_FETCH_CITY: string = 'https://countriesnow.space/api/v0.1/countries/state/cities'

  public  readonly API_USER_PROFILE_IMAGE: string = 'http://18.60.179.8:8080/payments-control-centre/v1/profile/image'
  public  readonly API_USER_PROFILE_Data: string = 'http://18.60.179.8:8080/payments-control-centre/v1/profile'

  public readonly API_LOGIN_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/authenticate`;

  public readonly API_ADD_COMPANY_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/company`;
  public readonly API_GET_COMPANY_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/company`;

  public readonly VENDOR_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/vendor`;

  public readonly ADD_VENDOR_DOC_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/document`;

  public readonly GET_VENDOR_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/vendor`;


  public readonly ADD_INVOICE_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/ap-invoice`;
  public readonly FILTER_INVOICE_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/ap-invoice?`;
  public readonly GET_INVOICE_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/ap-invoice`;

  public readonly ADD_PAYMENT_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/ap-payment`;

  public readonly STORE_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/store`;



  public readonly ADD_EXPENSE_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/expense`;
  public readonly ADD_TIME_SHEET_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/timesheet`;



  public readonly API_OPERATION_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/profile/operation-user`;
  public readonly API_FINANCE_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/profile/finance-user`;

  public readonly API_LANGUAGE_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/language`;
  public readonly API_DEPARTMENT_ENDPOINT: string = `http://18.60.179.8:8080/payments-control-centre/v1/department`;




  public readonly UPDATE_PROFILE_ENDPOINT: string = ` http://18.60.179.8:8080/payments-control-centre/v1/profile`;

  public readonly TOKEN_VERIFY_ENDPOINT: string = `${this.url}/api/authentication/token-verify`;
  public readonly LOGOUT_ENDPOINT: string = `${this.url}/api/authentication/logout`;
  public readonly SESSION_LOGOUT_ENDPOINT: string = `${this.url}/api/authentication/all-session-logout`;
  public readonly FORGOT_ENDPOINT: string = `${this.url}/api/authentication/forgot-password`;
}


