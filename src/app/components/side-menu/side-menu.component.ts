import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { BrowserDB } from "../../shared";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  constructor(
      private router: Router,
      private browser: BrowserDB,
      private toastr : ToastrService
  ) {
  }

  logout(){
    localStorage.clear();
    this.toastr.success('logout Successfully')
    this.router.navigate(['/login'])
  }

}
