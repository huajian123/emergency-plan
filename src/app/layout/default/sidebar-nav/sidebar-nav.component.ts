import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {TabService} from '../../../services/common-services/tab.service';
import {NzIconService} from 'ng-zorro-antd/';

interface Menu {
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
export class SidebarNavComponent implements OnInit, OnDestroy {
  @Input() isCollapsed: boolean;
  routerPath = '';
  menus: Menu[] = [
    {
      title: '测试模块2',
      icon: 'home',
      open: false,
      selected: false,
      children: [
        {
          title: '测试模块2',
          open: false,
          selected: false,
          children: [
            {
              title: '测试模块2',
              open: false,
              selected: false,
              path: '/hazard/ceshi2/ceshi2-ceshi2list',
            },
            {
              title: '测试详情',
              open: false,
              selected: false,
              path: '/hazard/ceshi2/ceshi2-ceshi2detail',
            }
          ]
        }
      ]
    },
    {
      title: '测试模块',
      icon: 'home',
      open: false,
      selected: true,
      path: '/hazard/ceshi/ceshi-list',
    },
    {
      title: '用户模块',
      icon: 'home',
      open: false,
      children: [
        {
          title: '用户列表',
          open: false,
          selected: false,
          path: '/hazard/user/user-list',
        },
        {
          title: '用户种类',
          open: false,
          selected: false,
          path: '/hazard/user/user-category',
        },
      ]
    },
    {
      title: '商品模块',
      icon: 'home',
      open: false,
      children: [
        {
          title: '商品种类',
          open: false,
          selected: false,
          path: '/hazard/product/product-category',
        },
        {
          title: '商品列表',
          open: false,
          selected: false,
          path: '/hazard/product/product-list',
        },
      ]
    },
    {
      title: '自燃灾害类',
        icon: 'iconnatura',
      open: false,
      children: [
        {
          title: '一级灾害',
          open: false,
          selected: false,
          path: '/hazard/natural-disaster/first',
        },
        {
          title: '二级灾害',
          open: false,
          selected: false,
          path: '/hazard/natural-disaster/second',
        },
        {
          title: '三级灾害',
          open: false,
          selected: false,
          path: '/hazard/natural-disaster/third',
        },
        {
          title: '四级灾害',
          open: false,
          selected: false,
          path: '/hazard/natural-disaster/fouth',
        },
      ]
    },
      {
          title: '事故灾害类',
          icon: 'iconaccident',
          open: false,
          children: [
              {
                  title: '一级灾害',
                  open: false,
                  selected: false,
                  path: '/hazard/accident-disaster/first',
              },
              {
                  title: '二级灾害',
                  open: false,
                  selected: false,
                  path: '/hazard/accident-disaster/second',
              },
              {
                  title: '三级灾害',
                  open: false,
                  selected: false,
                  path: '/hazard/accident-disaster/third',
              },
              {
                  title: '四级灾害',
                  open: false,
                  selected: false,
                  path: '/hazard/accident-disaster/fouth',
              },
          ]
      },
  ];
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
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
