import {Component, OnInit} from '@angular/core';
import {Menu} from '../default/sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-status-warning-layout',
  templateUrl: './status-warning-layout.component.html',
  styleUrls: ['./status-warning-layout.component.less']
})
export class StatusWarningLayoutComponent implements OnInit {
  isCollapsed = false;
  menus: Menu[] = [
    {
      title: '地震灾害判别',
      icon: 'zhihui',
      selected: false,
      path: '/status-warning/earthquake-warning/earthquake-level',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
