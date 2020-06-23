import {Component, OnInit} from '@angular/core';
import {Menu} from '../default/sidebar-nav/sidebar-nav.component';

@Component({
    selector: 'app-manage-layout',
    templateUrl: './manage-layout.component.html',
    styleUrls: ['./manage-layout.component.less']
})
export class ManageLayoutComponent implements OnInit {
    isCollapsed = false;
    menus: Menu[] = [
        {
            title: '指挥汇报管理',
            icon: 'zhihui',
            selected: false,
            path: '/hazard-manage/people-manage/report-command',
        },
        {
            title: '小队管理',
            icon: 'xiaodui',
            selected: false,
            path: '/hazard-manage/people-manage/teams',
        },
        {
            title: '部门管理',
            icon: 'bumen',
            selected: false,
            path: '/hazard-manage/people-manage/departments',
        },
        {
            title: '预案管理',
            icon: 'yuanguanli',
            selected: false,
            path: '/hazard-manage/people-manage/plans',
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
