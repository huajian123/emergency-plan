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
          path: '/hazard/natural-disaster/fist-natural-disaster',
        },
        {
          title: '二级灾害',
          open: false,
          selected: false,
          path: '/hazard/natural-disaster/second-natural-disaster',
        },
        {
          title: '三级灾害',
          open: false,
          selected: false,
          path: '/hazard/natural-disaster/third-natural-disaster',
        },
        {
          title: '四级灾害',
          open: false,
          selected: false,
          path: '/hazard/natural-disaster/fourth-natural-disaster',
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
