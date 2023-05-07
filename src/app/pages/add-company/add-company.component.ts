import {Component} from '@angular/core';
import {
    AbstractControl, FormArray,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
import {Constants, CompanyService} from "../../shared";
import {BrowserDB} from "../../shared";
import {AddressHelper} from "../../shared";

@Component({
    selector: 'app-acompany',
    templateUrl: './add-company.component.html',
    styleUrls: ['./add-company.component.scss']
})
export class CompanyComponent {
    constructor(
        private service: CompanyService,
        private formBuilder: FormBuilder,
        private notification: ToastrService,
        private router: Router,
        private constants: Constants,
        private browser: BrowserDB,
        private address: AddressHelper
    ) {

    }

    // @ts-ignore
    companyForm: FormGroup;
    submitted = false;
    countryList: any;
    stateList: any;
    cityList:any;
    singleCountry: string = '';

    ngOnInit(): void {
        this.address.getCountry('all')
            .then(country => {
                this.countryList = country
            });
        this.companyForm = this.formBuilder.group(
            {
                companyName: ['', [Validators.required]],
                mobileNumber: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(10),
                        Validators.maxLength(12),
                        Validators.pattern(this.constants.REGEXP.number)
                    ]
                ],
                typeOfService: ['', [Validators.required]],
                city: ['', [Validators.required]],
                country: ['', [Validators.required]],
                addStoreName: this.formBuilder.array([]),
                // storeName: ['', [Validators.required]],
                accountNumber: ['', [Validators.required, Validators.pattern(this.constants.REGEXP.number)]],
                personName: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                address: ['', [Validators.required]],
                state: ['', [Validators.required]],
                gst: ['', [Validators.required]],
                routingNumber: ['', [Validators.required]],
                description: ['', [Validators.required]],
            },
        );
    }

    get f(): { [key: string]: AbstractControl; } {
        return this.companyForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;
        console.log('controls....>>', this.companyForm.controls)
        if (this.companyForm.invalid) return;
        const obj  = {
            "companyId": "",
            "name": this.companyForm.value.companyName ,
            "companyType": this.companyForm.value.typeOfService ,
        //    "parentCompanyId": "",
            "gst": this.companyForm.value.gst,
            "memo": this.companyForm.value.description ,
            "createdBy": "",
            "createdDate": "",
            "modifiedBy": "",
            "modifiedDate": "",
            "address": {
                "addressId": "" ,
                "address1": this.companyForm.value.address,
                "city": this.companyForm.value.city,
                "state": this.companyForm.value.state,
                "country": this.companyForm.value.country,
                "createdBy": " ",
                "createdDate": "",
                "modifiedBy": "",
                "modifiedDate": ""
            },
            "contactInfo": {
                "contactInfoId": "",
                "contactName": this.companyForm.value.personName,
                "contactNumber": this.companyForm.value.mobileNumber,
                "emailId": this.companyForm.value.email,
                "memo": "",
                "createdBy": "",
                "createdDate": "",
                "modifiedBy": "",
                "modifiedDate": ""
            },
            "bankAccount": {
                "bankAccountId": "",
                "accountingNumber": this.companyForm.value.accountNumber,
                "routingNumber": this.companyForm.value.routingNumber,
                "createdBy": "",
                "createdDate": "",
                "modifiedBy": "",
                "modifiedDate": ""
            },
            "stores": [].concat(this.companyForm.value.storeName, this.companyForm.value.addStoreName)
        }
        this.service.companyRegister(obj)
            .subscribe((res) => {
                if (res.code == '1') {
                    this.submitted = false
                    this.notification.success('Company is Created successfully')
                    this.companyForm.reset();
                    window.location.reload();
                }
            }, error => {
                console.log('>>>>>>>>>>>>>>>>>?????', error)
                this.notification.error(error)

            })
    }
    addStoreName(): void {
        (this.companyForm.get('addStoreName') as FormArray).push(
            this.formBuilder.control(null)
        );
    }

    removeStoreName(index:any) {
        (this.companyForm.get('addStoreName') as FormArray).removeAt(index);
    }

    getStoreFormControls(): any {
        return (<FormArray> this.companyForm.get('addStoreName')).controls
    }

    selectCountry(val: any) {
        if (val.value == '') {
            this.notification.info('Please select country');
            this.stateList.length = 0;
            this.cityList.length = 0;
        } else {
            this.singleCountry = val.value
            this.address.getState(val.value).then(response => {
                // @ts-ignore
                this.stateList = response.states
            })
        }
    }
    selectState(val: any) {
        if (val.value == '') {
            this.notification.info('Please select country');
            this.cityList.length = 0;
        } else {
            this.address.getCity(val.value, this.singleCountry).then(response => {
                this.cityList = response
            })
        }
    }
}
