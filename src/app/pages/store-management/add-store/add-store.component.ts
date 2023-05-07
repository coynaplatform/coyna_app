import {Component} from '@angular/core';
import {
    AbstractControl, FormArray,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
import {Constants, CompanyService} from "../../../shared";
import {BrowserDB} from "../../../shared";
import {AddressHelper} from "../../../shared";

@Component({
    selector: 'app-astore',
    templateUrl: './add-store.component.html',
    styleUrls: ['./add-store.component.scss']
})
export class AddStore {
    // @ts-ignore
    storeForm: FormGroup;
    submitted: boolean = false;
    companyList: any;
    countryList: any;
    cityList: any;
    singleCountry: any;
    stateList: any;

    constructor(
        private formBuilder: FormBuilder,
        private constants: Constants,
        private companyService: CompanyService,
        private address: AddressHelper,
        private notification: ToastrService,
        private router: Router
    ) {
        this.getCompanies();
        this.address.getCountry('all')
            .then(country => {
                this.countryList = country
            });
    }



    ngOnInit(): void {
        this.storeForm = this.formBuilder.group(
            {
                name: ['', [Validators.required]],
                gst: ['', [Validators.required]],
                parentCompanyId: ['', [Validators.required]],
                accountingNumber: ['', [Validators.required]],
                routingNumber: ['', [Validators.required]],
                // address: this.formBuilder.group({
                city: ['', [Validators.required]],
                province: ['', [Validators.required]],
                country: ['', [Validators.required]]
                // }),
            },
        );
    }

    get f(): { [key: string]: AbstractControl; } {
        return this.storeForm.controls;
    }

    saveStore() {
        this.submitted = true
        console.log('.......', this.storeForm.controls)
        if (this.storeForm.invalid) return;
        let newObj = {
                "parentCompanyId": this.storeForm.value.parentCompanyId,
                "name": this.storeForm.value.name,
                "gst": this.storeForm.value.gst,
                "bankAccount":
                    {
                        "accountingNumber": this.storeForm.value.accountingNumber,
                        "routingNumber": this.storeForm.value.routingNumber
                    },
                "address":
                    {
                        "city": this.storeForm.value.city,
                        "province": this.storeForm.value.province,
                        "country": this.storeForm.value.country
                    }
            }

            this.companyService.addStore(newObj)
                .subscribe(res=> {
                    if (res.code == '1') {
                        this.notification.success(res.message)
                        this.storeForm.reset()
                        this.submitted = false;
                    }
                })}

    getCompanies () {
        this.companyService.getCompany().subscribe(res=> {
            if (res) {
                this.companyList =  res.results;
            }
        })
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
    goToBack(){
        this.router.navigate(['store-management'])
    }

}

