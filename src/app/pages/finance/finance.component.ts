import {Component} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
import {Constants} from "../../shared";
import {BrowserDB} from "../../shared";
import {CompanyService} from "../../shared";


@Component({
    selector: 'app-finance',
    templateUrl: './finance.component.html',
    styleUrls: ['./finance.component.scss']
})
export class FinanceComponent {
    constructor(
        private formBuilder: FormBuilder,
        private notification: ToastrService,
        private router: Router,
        private constants: Constants,
        private browser: BrowserDB,
        private service: CompanyService
    ) {
    }

    // @ts-ignore
    financeForm: FormGroup;
    submitted = false;
    companyList: any;


    ngOnInit(): void {
        this.getCompanies();
        this.financeForm = this.formBuilder.group(
            {
                cName: ['', [Validators.required]],
                userId: ['', [Validators.required]],
                name: ['', [Validators.required, Validators.pattern(this.constants.REGEXP.alphanumWithSpaceDot)]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required]],
                mobileNo: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(10),
                        Validators.maxLength(12),
                        Validators.pattern(this.constants.REGEXP.number)
                    ]
                ],
            },
        );
    }


    get f(): { [key: string]: AbstractControl; } {
        return this.financeForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;
        if (this.financeForm.invalid) {
            return;
        }
      const newObj =  {
        "companyId": this.financeForm.value.cName,
        "userFullName": this.financeForm.value.name,
        "contactNumber": this.financeForm.value.mobileNo,
        "emailId": this.financeForm.value.email,
        "userName": this.financeForm.value.userId,
        "password": this.financeForm.value.password
      }
        this.service.addFinance(newObj).subscribe(
            res => {
                if (res.code == "1") {
                    this.submitted = false;
                    this.notification.success("Finance user is created.");
                    this.financeForm.reset();
                    window.location.reload()
                }
            },
            error => {
                console.log('erroor', error)
            }
        )
    }

    getCompanies() {
        this.service.getCompany().subscribe(res => {
                this.companyList = res.results;

        })
    }
}
