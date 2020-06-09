import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {TabService} from '../../../services/common-services/tab.service';
import {NzIconService} from 'ng-zorro-antd/';

export interface Menu {
  path?: string;
  title: string;
  icon?: string;
  open?: boolean;
  selected?: boolean;
  children?: Menu[];
}

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.less']
})
export class SidebarNavComponent implements OnInit, OnDestroy{
  @Input() isCollapsed: boolean;
  @Input() menus: Menu[]=[];
  routerPath = '';
  subs: Array<Subscription> = [];

  constructor(private router: Router, private route: ActivatedRoute, private tabService: TabService, private iconService: NzIconService) {
    this.iconService.fetchFromIconfont({
        scriptUrl: 'https://at.alicdn.com/t/font_1863242_95qatt77gpl.js'
    });
    this.routerPath = this.router.url;
    this.subs[0] = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => {
          // @ts-ignore
          this.routerPath = this.route.snapshot._routerState.url;
          this.clickMenuItem();
        }),
        map(() => this.route.snapshot),
          // tslint:disable-next-line:no-shadowed-variable
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.tabService.addTab({title: route.data.title, path: this.routerPath});
        this.tabService.findIndex(this.routerPath);
      });
  }

  clickMenuItem() {
    if (!this.menus) {return; }
    for (const item of this.menus) {
      item.open = false;
      item.selected = false;
      // 一级菜单
      if (!item.children || item.children.length === 0) {
        if (item.path === this.routerPath) {
          item.selected = true;
        }
        continue;
      }
      /*二级菜单*/
      for (const subItem of item.children) {
        subItem.selected = false;
        subItem.open = false;
        if (!subItem.children || subItem.children?.length === 0) {
          if (subItem.path === this.routerPath) {
            item.open = true;
            item.selected = true;
            subItem.selected = true;
            subItem.open = true;
          }
          continue;
        }
        for (const thirdItem of subItem.children) {
          if (thirdItem.path === this.routerPath) {
            item.open = true;
            item.selected = true;
            subItem.selected = true;
            subItem.open = true;
            thirdItem.open = true;
            thirdItem.selected = true;
          }else{
            thirdItem.open = false;
            thirdItem.selected = false;
          }
        }
      }
    }
  }


  ngOnInit(): void {
    this.clickMenuItem();
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
