import {NgModule} from '@angular/core';
import {Constants} from './config/constants';
import {EmailValidatorDirective} from "./directive/email-validation.directive";
import {ApiService, HttpServices} from './service';
import {DashboardComponent} from '../pages/dahboard/dashboard.component';
import {UserAccountModule} from "../pages/user-account/user-account.module";
import {RouterLink} from "@angular/router";
import {ErrorModule} from "../pages/error/error.module";
import {AuthService} from "./service/apis/auth.service";
import {AuthGuard} from "./guard/auth-guard.service";
import {JwtModule} from "@auth0/angular-jwt";
import {BrowserDB} from "./helper/browserDB";
import {CryptoService} from "./helper/cryptoJs";
import {CompanyModule} from "../pages/add-company/add-company.module";
import {CompanylModule} from "../pages/company/company.module";
import {VendorModule} from "../pages/vendor/vendor.module";
import {VendordModule} from "../pages/vendor-detail/vendor-detail.module";
import {CompanydModule} from "../pages/company-detail/company-detail.module";
import {FinanceModule} from "../pages/finance/finance.module";
import {OperationModule} from "../pages/operation/operation.module";
import {AFinanceModule} from "../pages/finance-listing/finance-listing.module";
import {OperationlModule} from "../pages/operation-listing/operation-listing.module";
import {IsLoginAuthGuard} from "./guard/auth-is-login.guard";
import {SalesModule} from "../pages/sales/sales.module";
import {AccountModule} from "../pages/invoice-listing/invoice-listing.module";
import {AccountrecModule} from "../pages/accounts-receivable/accounts-receivable.module";
import {AddressHelper} from "./helper/address.helper";

import {MaterialComponentsModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";

import { InvoiceManagementModule } from "../pages/invoice-management/invoice-management.module";
import { PaymentProcessingModule } from "../pages/payment-processing/paymnet-processing.module";
import {ExpenseManagementModule } from "../pages/expense-management/expense-management.module";
import { EmployeeShiftAttendanceModule } from "../pages/employee-shift-attendance/employee-shift-attendance.module";
import { IndcollModule } from "../pages/individual-collection/individual-collection.module";
import { ScratchwinModule } from "../pages/scratch-win/scratch-win.module";
import { ShiftsheetModule } from "../pages/shift-sheet/shift-sheet.module";
import { FueldipModule } from "../pages/fuel-dip/fuel-dip.module";
import { LedgerrepModule } from "../pages/ledger-reports/ledger-reports.module";
import { DepdailysheetModule } from "../pages/daily-sheet/daily-sheet.module";
import { WeeklypcloseModule } from "../pages/weekly-physical-closing/weekly-physical-closing.module";
import { ProjmgntModule } from "../pages/project-management/project-management.module";
import { StoremgntModule } from "../pages/store-management/store-management.module";
import { InvoicedModule } from "../pages/invoice-detail/invoice-detail.module";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        UserAccountModule,
        RouterLink,
        ErrorModule,
        CompanyModule,
        CompanylModule,
        CompanydModule,
        VendorModule,
        VendordModule,
        FinanceModule,
        OperationModule,
        AFinanceModule,
        OperationlModule,
        SalesModule,
        AccountModule,
        InvoiceManagementModule,
        PaymentProcessingModule,
        ExpenseManagementModule,
        EmployeeShiftAttendanceModule,
        IndcollModule,
        ScratchwinModule,
        ShiftsheetModule,
        FueldipModule,
        LedgerrepModule,
        DepdailysheetModule,
        WeeklypcloseModule,
        ProjmgntModule,
        StoremgntModule,
        InvoicedModule,
        JwtModule.forRoot({
            config: {
                // @ts-ignore
                tokenGetter: '3JaJfaUDKKYgpWtYFYGv0S6vCCIW4QuujAPgeTDO',
                allowedDomains: ["http://localhost:4200"],
                disallowedRoutes: [""],
            },
        }),
        MaterialComponentsModule,
        ReactiveFormsModule,
    ],
    providers: [ApiService, Constants, HttpServices, AuthService, AuthGuard, BrowserDB,
        CryptoService, IsLoginAuthGuard, AddressHelper],
    bootstrap: []
})
export class SharedModule {
}
