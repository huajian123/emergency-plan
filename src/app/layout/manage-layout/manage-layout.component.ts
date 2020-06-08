import { Component, OnInit } from '@angular/core';
import {Menu} from "../default/sidebar-nav/sidebar-nav.component";

@Component({
  selector: 'app-manage-layout',
  templateUrl: './manage-layout.component.html',
  styleUrls: ['./manage-layout.component.less']
})
export class ManageLayoutComponent implements OnInit {
  isCollapsed = false;
  menus: Menu[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
