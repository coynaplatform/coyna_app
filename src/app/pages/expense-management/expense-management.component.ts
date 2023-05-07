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
import {CompanyService, UtilityHelper} from "../../shared";


export interface fileNames  {
    type: string
    name: string
}
@Component({
    selector: 'app-expense',
    templateUrl: './expense-management.component.html',
    styleUrls: ['./expense-management.component.scss']
})
export class ExpenseComponent {
    constructor(
        private formBuilder: FormBuilder,
        private notification: ToastrService,
        private router: Router,
        private constants: Constants,
        private browser: BrowserDB,
        private service: CompanyService,
        private utility: UtilityHelper
    ) {
    }

    objectKeys = Object.keys;

    fileNames:fileNames []= [] ;

    // @ts-ignore
    expenseForm: FormGroup;
    submitted = false;
    urls = [];
    pdfSource = '';
    myFiles: string [] = [];


    companyList: any;
    paymentMethodList = [{name: 'Online', id: 1}, {name: 'Cash', id: 2}, {name: "Account Pay", id: 3}];


    ngOnInit(): void {
        // this.getCompanies();
        this.expenseForm = this.formBuilder.group(
            {
                eName: ['', [Validators.required]],
                levelName: ['', [Validators.required]],
                travelDate: ['', [Validators.required]],
                totalExpenses: ['', [Validators.required]],
                travelLocation: ['', [Validators.required]],
                receiptInformation: ['', [Validators.required]],
                approvalDate: ['', [Validators.required]],
                approvedBy: ['', [Validators.required]],
                paymentDate: ['', [Validators.required]],
                paymentMode: ['', [Validators.required]],
                uploadDoc: ['', [Validators.required]],
            },
        );
    }


    get f(): { [key: string]: AbstractControl; } {
        return this.expenseForm.controls;
    }

    saveExpense(): void {
        this.submitted = true;
        if (this.expenseForm.invalid) {
            return;
        }
        const newObj = {
            "totalAmount": this.expenseForm.value.totalExpenses,
            "employeName": this.expenseForm.value.eName,
            "companyId":"416de770-6e66-4673-a21c-dbb56e9d8b05",
            "receipt": this.expenseForm.value.receiptInformation,
            "travelDate": new Date(this.expenseForm.value.travelDate),
            "travelLocation": this.expenseForm.value.travelLocation,
            "level": this.expenseForm.value.levelName,
            "approvedDate": new Date(this.expenseForm.value.approvalDate),
            "approvedBy": this.expenseForm.value.approvedBy,
            "paymentDate": new Date(this.expenseForm.value.paymentDate),
            "paymentMode": this.expenseForm.value.paymentMode
        }
        this.service.addExpense(newObj).subscribe(
            res => {
                if (res.code == "1") {
                    this.uploadDoc(res.results)
                }
            })
    }

    onSelectFile(event: any, type: string) {

            if (event.target.files && event.target.files[0]) {
                this.utility.fileSize(event.target, '60 KB');
                console.log('eeee')
                if (this.fileNames.some(item => item.name == event.target.files[0].name)) {
                    this.notification.error(`${event.target.files[0].name} file name is all ready used`)
                } else {
                    let filesAmount = event.target.files.length;
                    for (let i = 0; i < filesAmount; i++) {
                        // @ts-ignore
                        this.myFiles.push(event.target.files[i]);

                        this.fileNames.push({name: event.target.files[i].name, type: type});

                        if (event.target.files[0].type == "application/pdf") {
                            this.pdfSource = event.target.files[0].name
                        } else {
                            let reader = new FileReader();
                            reader.onload = (event: any) => {
                                // @ts-ignore
                                this.urls.push(event.target.result);
                            }
                            reader.readAsDataURL(event.target.files[i]);
                        }
                    }
                }
            }
    }

    removeSelectedFile(index: any) {
        this.myFiles.splice(index, 1);
        this.urls.splice(index, 1);
        this.fileNames.splice(index, 1);

        if (this.myFiles.length == 0) {
            this.expenseForm.patchValue({
                uploadDoc: ''
            })
        }
    }

    uploadDoc(id: any) {
        const formData = new FormData();
        for (let i = 0; i < this.myFiles.length; i++) {
            formData.append("documents", this.myFiles[i]);
        }
        this.service.vendorUpload(id, formData)
            .subscribe(response => {
                if (response.code == '1') {
                    this.notification.success(response.message);
                    this.expenseForm.reset();
                    this.submitted = false;
                    this.myFiles.length = 0;
                    window.location.reload()
                }
            })
    }

    getCompanies() {
        this.service.getCompany().subscribe(res => {
            if (res) {
                this.companyList = res.results;
                console.log('Res', res)
            }
        })
    }

}