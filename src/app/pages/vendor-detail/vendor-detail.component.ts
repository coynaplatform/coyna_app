import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
import {Constants} from "../../shared";
import { BrowserDB } from "../../shared";
import { CompanyService } from "../../shared";

@Component({
    selector: 'app-vendord',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.scss']
})
export class VendordComponent {
  constructor(
      private formBuilder: FormBuilder,
      private notification: ToastrService,
      private router: Router,
      private constants: Constants,
      private browser: BrowserDB,
      private service: CompanyService
  ){ }

  // @ts-ignore
  operationForm: FormGroup;
  submitted = false;
  companyList: any;



  ngOnInit(): void {
      this.getCompanies();
    this.operationForm = this.formBuilder.group(
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
    return this.operationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.operationForm.invalid) {
      return;
    }
    console.log('finace Data',this.operationForm.value )
    const newObj =  {
          "companyId": this.operationForm.value.cName,
          "userFullName": this.operationForm.value.name,
          "contactNumber": this.operationForm.value.mobileNo,
          "emailId": this.operationForm.value.email,
          "userName": this.operationForm.value.userId,
          "password": this.operationForm.value.password
      }

    this.service.addOperation(newObj).subscribe(
        res=>{
            if (res.code == "1") {
                this.submitted = false;
                this.notification.success(res.message);
                this.operationForm.reset();
                window.location.reload()
            }
        },
        error => {
          console.log('erroor', error)
        }
    )
  }

  getCompanies () {
      this.service.getCompany().subscribe(res=> {
          if (res) {
             this.companyList =  res.results;
              console.log('Res', res)
          }
      })
  }
}
