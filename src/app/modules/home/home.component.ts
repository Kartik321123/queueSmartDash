import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StorageHelper } from 'src/app/helpers/storage';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
// import { ToastrService } from 'ngx-toastr';
import { Utils } from 'src/app/helpers/utilities';
import { MatSidenav } from '@angular/material/sidenav';
import { NavItem } from './modules/side-nav/components/menu-list/menu-list.component';

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
    private loader: NgxUiLoaderService
  ) {
    const data: any = localStorage.getItem('userinfo')
    if (data) {
      this.userData = JSON.parse(data)
    }
  }



  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }



  ngOnInit(): void {
    this.handleRouteChange();

  }


  handleRouteChange() {
    const url = window.location.href;
    if (url.includes('admin')) {
      this.goToVisitor(false)
    }
  }



  closeSidebar() {
    this.close = true
  }
  openSidebar() {
    this.close = false
  }


  goToVisitor(shouldRedirect = true) {

    const item: NavItem[] = [

      {
        displayName: 'Home',
        route: 'admin/dashboard',
        // iconName: 'dashboard',
        isSubSubmenu: false
      },

      {
        displayName: 'Users',
        route: 'admin/client',
        // iconName: 'person',
        isSubSubmenu: false
      },

      // {
      //   displayName: 'Wallet',
      //   route: 'admin/userWallet',
      //   // iconName: 'person',
      //   isSubSubmenu: false
      // },
      {
        displayName: 'Withdrawal Req.',
        route: 'admin/withDrawal',
        // iconName: 'person',
        isSubSubmenu: false
      },
      {
        displayName: 'Wallet Tier',
        route: 'admin/wallettier',
        // iconName: 'person',
        isSubSubmenu: false
      },
    ]

    this.menus = [...item, ...this.fixedMenus];
    this.menus = this.menus.map(res => {
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


  shouldHighlightButton(menu: string) {
    if (menu === 'visitor') {
      if ((!window.location.href.includes('setting') && window.location.href.includes('visitor'))) {
        return true
      }
      return false
    } else if (menu === 'setting') {
      if ((!window.location.href.includes('notification') && window.location.href.includes('setting'))) {
        return true
      }
      return false;
    }

    return window.location.href.includes(menu);
  }


  logout() {
    Utils.logout();
    this.router.navigate(['login']);
  }








}
