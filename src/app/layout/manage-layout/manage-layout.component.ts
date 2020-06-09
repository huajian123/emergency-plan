import { Component, OnInit } from '@angular/core';
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
      title: '表格模板',
      icon: 'iconsocity',
      open: false,
      children: [
        {
          title: '表格',
          open: false,
          selected: false,
          path: '/hazard-manage/people-manage/table-model',
        },
        {
          title: '表单',
          open: false,
          selected: false,
          path: '/hazard-manage/people-manage/form-model',
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
