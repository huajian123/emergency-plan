import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {TabService} from '../../../services/common-services/tab.service';

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
export class SidebarNavComponent implements OnInit, OnDestroy {
    @Input() isCollapsed: boolean;
    @Input() menus: Menu[] = [];
    routerPath = '';
    subs: Array<Subscription> = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private tabService: TabService) {
        this.routerPath = this.router.url;
        this.subs[0] = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                tap(() => {
                    this.routerPath = this.activatedRoute.snapshot['_routerState'].url;
                    this.clickMenuItem();
                }),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route) => {
                    return route.data;
                }),
            )
            .subscribe((routeData) => {
                this.tabService.addTab({title: routeData['title'], path: this.routerPath});
                this.tabService.findIndex(this.routerPath);
            });
    }

    clickMenuItem() {
        if (!this.menus) {
            return;
        }
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
                    } else {
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
