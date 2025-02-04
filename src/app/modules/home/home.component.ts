import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StorageHelper } from 'src/app/helpers/storage';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { Utils } from 'src/app/helpers/utilities';
import { MatSidenav } from '@angular/material/sidenav';
import { NavItem } from './modules/side-nav/components/menu-list/menu-list.component';
import { ClintService } from './modules/admin/Clints/Providers/clint.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showFiller = false;
  vistorMenuAdded = false;
  close = false
  userData: any

  showSubSubMenu: boolean = false;
  fixedMenus: NavItem[] = [

  ];
  menus = this.fixedMenus;

  selectedLocation: string = '';
  showLoader = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loader: NgxUiLoaderService,
    private toastr:ToastrService,
    private clientService: ClintService,
    private snackBar: MatSnackBar
  ) {
    const data: any = localStorage.getItem('userinfo')
    if (data) {
      this.userData = JSON.parse(data)
    }
  }


  ngOnInit(): void {
    this.handleRouteChange();

  }

  handleRouteChange() {
    const url = window.location.href;
    if (url.includes('admin')) {
      this.goToDashboard(false)
    }
  }

  goToDashboard(shouldRedirect = true) {

    const item: NavItem[] = [

      {
        displayName: 'Home',
        route: 'admin/dashboard',
        isSubSubmenu: false
      },
      {
        displayName: 'Patients',
        route: 'admin/client',
        isSubSubmenu: false
      },
      {
        displayName: 'Doctors',
        route: 'admin/doctor',
        isSubSubmenu: false
      },

    ]

    this.menus = [...item, ...this.fixedMenus];
    this.menus = this.menus.map(res => {
      // console.log(res);
      res.locationId = this.selectedLocation;
      res.children = res.children && res.children.map(route => {
        route.locationId = this.selectedLocation;
        return route;
      })
      return res;
    })
    if (shouldRedirect) {
      this.router.navigate(['/admin/dashboard']);
    }
  }


  runChron(){
    this.clientService.runChron().subscribe((res:any)=>{
      if(res){
       this.snackBar.open(res.message, 'Close'),{
        duration: 3000
       }
      }
    })
  }

  logout() {
    Utils.logout();
    this.router.navigate(['login']);
  }








}
