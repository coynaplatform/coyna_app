import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from "./layouts/auth/auth.component";
import {DashboardComponent} from './pages/dahboard/dashboard.component';
import {CompanyComponent} from './pages/add-company/add-company.component';
import {CompanylComponent} from './pages/company/company.component';
import {OperationComponent} from './pages/operation/operation.component';
import {OperationlComponent} from './pages/operation-listing/operation-listing.component';
import {FinanceComponent} from './pages/finance/finance.component';
import {AFinanceComponent} from './pages/finance-listing/finance-listing.component';
import {VendorComponent} from './pages/vendor/vendor.component';
import {VendordComponent} from './pages/vendor-detail/vendor-detail.component';
import { VendorListingComponent } from "./pages/vendor-listing/vendor-listing.component";
import {CompanydComponent} from './pages/company-detail/company-detail.component';
import {StoredComponent} from './pages/store-detail/store-detail.component';
import {InvoicedComponent} from './pages/invoice-detail/invoice-detail.component';
import {InvoiceComponent} from './pages/invoice-management/invoice-management.component';
import {PaymentComponent} from './pages/payment-processing/payment-processing.component';
import {AccountComponent} from './pages/invoice-listing/invoice-listing.component';
import {AccountrecComponent} from './pages/accounts-receivable/accounts-receivable.component';
import {ShiftattComponent} from './pages/employee-shift-attendance/employee-shift-attendance.component';
import {ExpenseComponent} from './pages/expense-management/expense-management.component';
import {IndcollComponent} from './pages/individual-collection/individual-collection.component';
import {ProfileComponent} from "./pages/user-account/profile/profile.component";
import {FullPageComponent} from "./layouts/full-page/full-page.component";
import {Error400Component} from "./pages/error/error400/error400.component";
import {Error404Component} from "./pages/error/error404/error404.component";
import {AuthGuard} from "./shared/guard/auth-guard.service";
import {IsLoginAuthGuard} from "./shared/guard/auth-is-login.guard";
import {SalesComponent} from "./pages/sales/sales.component";
import {ScratchwinComponent} from "./pages/scratch-win/scratch-win.component";
import {ShiftsheetComponent} from "./pages/shift-sheet/shift-sheet.component";
import {FueldipComponent} from "./pages/fuel-dip/fuel-dip.component";
import {SupportComponent} from "./pages/support/support.component";
import {LedgerrepComponent} from "./pages/ledger-reports/ledger-reports.component";
import {DepdailysheetComponent} from "./pages/daily-sheet/daily-sheet.component";
import {WeeklypcloseComponent} from "./pages/weekly-physical-closing/weekly-physical-closing.component";
import {ProjmgntComponent} from "./pages/project-management/project-management.component";
import {StoremgntComponent} from "./pages/store-management/store-management.component";
import { AddStore } from "./pages/store-management/add-store/add-store.component";
import { CommonModule } from '@angular/common';
//import {EditInvoiceComponent} from "./pages/invoice-management/edit-invoice/edit-invoice.component";

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: '',
        component: AuthComponent,
        // canActivate: [IsLoginAuthGuard],
        loadChildren: () => import('./pages/authentication/authentication.module').then((m) => m.AuthenticationModule),
    },


    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: {requiresLogin: true}},
            {path: 'add-company', component: CompanyComponent, data: {requiresLogin: true}},
            {path: 'company', component: CompanylComponent},
            {path: 'operation', component: OperationComponent},
            {path: 'finance', component: FinanceComponent},
            {path: 'operation-listing', component: OperationlComponent},
            {path: 'finance-listing', component: AFinanceComponent},
            {path: 'vendor', component: VendorComponent},
            {path: 'vendor-listing', component: VendorListingComponent},
            {path: 'vendor-detail', component: VendordComponent},
            {path: 'company-detail', component: CompanydComponent},
            {path: 'store-detail', component: StoredComponent},
            {path: 'invoice-details/:id', component: InvoicedComponent},
            //{path: 'invoice-edit/:id', component: EditInvoiceComponent},
            {path: 'invoice-management', component: InvoiceComponent},
            {path: 'payment-processing', component: PaymentComponent},
            {path: 'invoice-listing', component: AccountComponent},
            {path: 'accounts-receivable', component: AccountrecComponent},
            {path: 'employee-shift-attendance', component: ShiftattComponent},
            {path: 'expense-management', component: ExpenseComponent},
            {path: 'sales', component: SalesComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'individual-collection', component: IndcollComponent},
            {path: 'scratch-win', component: ScratchwinComponent},
            {path: 'shift-sheet', component: ShiftsheetComponent},
            {path: 'fuel-dip', component: FueldipComponent},
            {path: 'support', component: SupportComponent},
            {path: 'ledger-reports', component: LedgerrepComponent},
            {path: 'daily-sheet', component: DepdailysheetComponent},
            {path: 'weekly-physical-closing', component: WeeklypcloseComponent},
            {path: 'project-management', component: ProjmgntComponent},
            {path: 'store-management', component: StoremgntComponent},
            {path: 'add-store', component: AddStore},

        ]
    },
    {
        path: '**',
        component: FullPageComponent,
        children: [
            {path: '', component: Error404Component}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
