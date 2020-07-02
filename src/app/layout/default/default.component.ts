import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Menu} from './sidebar-nav/sidebar-nav.component';

@Component({
    selector: 'app-defalut',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.less']
})
export class LayoutDefalutComponent implements OnInit, OnDestroy {
    isCollapsed = false;
    menus: Menu[] = [
        {
            title: '自燃灾害类',
            icon: 'iconnatura',
            open: false,
            children: [
                {
                    title: '防汛防旱',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/drought-and-flood-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/drought-and-flood-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/drought-and-flood-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/drought-and-flood-fourth',
                        },
                    ]
                },
                {
                    title: '地震应急',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/earthquake-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/earthquake-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/earthquake-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/earthquake-disaster-fourth',
                        },
                    ]
                },
                {
                    title: '气象灾害',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/meteorological-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/meteorological-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/meteorological-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/meteorological-disaster-fourth',
                        },
                    ]
                },
                {
                    title: '自然灾害救助',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/natural-disaster-relief-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/natural-disaster-relief-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/natural-disaster-relief-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/natural-disaster-relief-fourth',
                        },
                    ]
                },
                {
                    title: '地质灾害',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/geological-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/geological-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/geological-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/geological-disaster-fourth',
                        },
                    ]
                },
                {
                    title: '台风灾害',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/typhoon-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/typhoon-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/typhoon-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/natural-disaster/typhoon-disaster-fourth',
                        },
                    ]
                }
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
                    path: '/hazard/accident-disaster/first-accident-disaster',
                },
                {
                    title: '二级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/accident-disaster/second-accident-disaster',
                },
                {
                    title: '三级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/accident-disaster/third-accident-disaster',
                },
                {
                    title: '四级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/accident-disaster/fourth-accident-disaster',
                },
            ]
        },
        {
            title: '公共卫生类',
            icon: 'iconpublic',
            open: false,
            children: [
                {
                    title: '一级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/public-health/first-health-disaster',
                },
                {
                    title: '二级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/public-health/second-health-disaster',
                },
                {
                    title: '三级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/public-health/third-health-disaster',
                },
                {
                    title: '四级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/public-health/fourth-health-disaster',
                },
            ]
        },
        {
            title: '社会安全类',
            icon: 'iconsocity',
            open: false,
            children: [
                {
                    title: '一级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/social-security/fist-security-disaster',
                },
                {
                    title: '二级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/social-security/second-security-disaster',
                },
                {
                    title: '三级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/social-security/third-security-disaster',
                },
                {
                    title: '四级灾害',
                    open: false,
                    selected: false,
                    path: '/hazard/social-security/fourth-security-disaster',
                },
            ]
        },
    ];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
    }

}
