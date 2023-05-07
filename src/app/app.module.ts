import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AuthComponent} from './layouts/auth/auth.component';
import {FullPageComponent} from './layouts/full-page/full-page.component';
import {AdminComponent} from './layouts/admin/admin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {HttpErrorInterceptor, UserService} from "./shared";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from '@angular/flex-layout';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { MainHeaderComponent } from "./components/header/main-header/main-header.component";
import { MainFooterComponent } from "./components/footer/main-footer/main-footer.component";
import {HeaderInterceptor} from "./shared/interceptor/header.interceptor";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        FullPageComponent,
        AdminComponent,
        SideMenuComponent,
        MainHeaderComponent,
        MainFooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule, FormsModule, CommonModule,
        FlexLayoutModule,
        NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
        SweetAlert2Module.forRoot(),
        ToastrModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        },
        UserService,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
