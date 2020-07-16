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
            title: '总预案',
            icon: 'icontotal',
            open: false,
            selected: false,
            path: '/hazard-status/status-warning/total-plan',
        },
        {
            title: '自然灾害类',
            icon: 'iconnatura',
            open: false,
            children: [
                {
                    title: '汛旱灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/natural-drought-and-flood-level',
                },
                {
                    title: '地震灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/natural-earthquake-level',
                },
                {
                    title: '气象灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/natural-meteorological-level',
                },
                {
                    title: '自然灾害救助',
                    selected: false,
                    path: '/hazard-status/status-warning/natural-relief-level',
                },
                {
                    title: '地质灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/natural-geological-level',
                },

                {
                    title: '台风灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/natural-typhoon-level',
                },
            ]
        },
        {
            title: '事故灾害类',
            icon: 'iconaccident',
            open: false,
            children: [
                {
                    title: '道路交通灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-road-traffic-level',
                },
                {

                    title: '突发环境灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-environmental-level',

                },

                {
                    title: '辐射灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-radiation-level',

                },
                {

                    title: '太湖蓝藻灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-algae-outbreak-level',

                },
                {
                    title: '太湖湖泛',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-lake-flooding-level',

                },
                {
                    title: '重污染天气',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-pollution-weather-level',
                },
                {

                    title: '核应急',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-nuclear-event-level',

                },
                {
                    title: '特种设备',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-special-equipment-level',

                },
                {
                    title: '铁路事故',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-railway-accident-level',

                },
                {
                    title: '港口危险化学品',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-port-hazardous-chemicals-level',

                },
                {
                    title: '大面积停电',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-blackout-level',

                },
                {
                    title: '重特大火灾',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-fire-accident-level',
                },
                {
                    title: '通信保障',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-communication-level',
                },
                {
                    title: '危险化学品',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-hazardous-chemicals-level',

                },
                {
                    title: '生产安全',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-production-safety-level',
                },
                {
                    title: '森林火灾',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-forest-fire-level',

                },
                {
                    title: '水上搜救',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-water-search-rescue-level',
                },
                {
                    title: '轨道交通运营',
                    selected: false,
                    path: '/hazard-status/status-warning/accident-rail-traffic-level',
                },
            ]
        },
        {
            title: '公共卫生类',
            icon: 'iconpublic',
            open: false,
            children: [
                {
                    title: '食品安全',
                    selected: false,
                    path: '/hazard-status/status-warning/public-food-safety-level',
                },
                {
                    title: '公共卫生',
                    selected: false,
                    path: '/hazard-status/status-warning/public-health-event-level',
                },
                {

                    title: '医疗救急',
                    selected: false,
                    path: '/hazard-status/status-warning/public-medical-aid-level',

                },
                {
                    title: '鼠疫灾害控制',
                    selected: false,
                    path: '/hazard-status/status-warning/public-plague-control-level',
                },
                {
                    title: '流感疫情',
                    selected: false,
                    path: '/hazard-status/status-warning/public-influenza-level',
                },
                {
                    title: '动物疫情',
                    selected: false,
                    path: '/hazard-status/status-warning/public-animal-epidemic-level',
                },
                {
                    title: '药品医疗器械',
                    selected: false,
                    path: '/hazard-status/status-warning/public-medical-devices-level',
                },
            ]
        },
        {
            title: '社会安全类',
            icon: 'iconsocity',
            open: false,
            children: [
                {
                    title: '恐怖袭击',
                    selected: false,
                    path: '/hazard-status/status-warning/social-terrorist-attacks-level',
                },
                {
                    title: '群体性事件',
                    selected: false,
                    path: '/hazard-status/status-warning/social-mass-incident-level',
                },
                {
                    title: '价格异动',
                    selected: false,
                    path: '/hazard-status/status-warning/social-price-changes-level',

                },
                {
                    title: '粮食应急危机',
                    selected: false,
                    path: '/hazard-status/status-warning/social-grain-emergency-level',
                },
                {
                    title: '网络与信息安全',
                    selected: false,
                    path: '/hazard-status/status-warning/social-network-information-level',
                },
                {
                    title: '涉外突发灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/social-foreign-affairs-level',
                },
                {
                    title: '金融突发灾害',
                    selected: false,
                    path: '/hazard-status/status-warning/social-financial-accident-level',
                },
                {
                    title: '政府性债务危机',
                    selected: false,
                    path: '/hazard-status/status-warning/social-government-debt-level',
                },
                {
                    title: '军粮应急危机',
                    selected: false,
                    path: '/hazard-status/status-warning/social-commissary-emergency-level',
                },
                {
                    title: '救灾物资应急',
                    selected: false,
                    path: '/hazard-status/status-warning/social-relief-supplies-level',
                },

            ]
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
