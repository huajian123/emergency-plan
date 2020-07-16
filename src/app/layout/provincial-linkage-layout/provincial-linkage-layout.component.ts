import {Component, OnDestroy, OnInit} from '@angular/core';
import {Menu} from '../default/sidebar-nav/sidebar-nav.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-provincial-linkage-layout',
    templateUrl: './provincial-linkage-layout.component.html',
    styleUrls: ['./provincial-linkage-layout.component.less']
})
export class ProvincialLinkageLayoutComponent implements OnInit, OnDestroy {
    isCollapsed = false;
    menus: Menu[] = [
        {
            title: '自然灾害类',
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
                            path: '/hazard-provincial/provincial-linkage/first-drought-pro',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/second-drought-pro',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/third-drought-pro',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/fourth-drought-pro',
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
                            path: '/hazard-provincial/provincial-linkage/earthquake-pro-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/earthquake-pro-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/earthquake-pro-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/earthquake-pro-fourth',
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
                            path: '/hazard-provincial/provincial-linkage/meteorological-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/meteorological-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/meteorological-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/meteorological-disaster-fourth',
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
                            path: '/hazard-provincial/provincial-linkage/natural-disaster-relief-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/natural-disaster-relief-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/natural-disaster-relief-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/natural-disaster-relief-fourth',
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
                            path: '/hazard-provincial/provincial-linkage/geological-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/geological-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/geological-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/geological-disaster-fourth',
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
                            path: '/hazard-provincial/provincial-linkage/typhoon-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/typhoon-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/typhoon-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/typhoon-disaster-fourth',
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
                    title: '重特大道路交通',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/road-traffic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/road-traffic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/road-traffic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/road-traffic-fourth',
                        }]
                },
                {
                    title: '突发环境',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/environmental-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/environmental-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/environmental-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/environmental-fourth',
                        }]
                },
                {
                    title: '辐射',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/radiation-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/radiation-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/radiation-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/radiation-accident-fourth',
                        }]
                },
                {
                    title: '太湖蓝藻',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/algae-outbreak-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/algae-outbreak-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/algae-outbreak-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/algae-outbreak-fourth',
                        }]
                },
                {
                    title: '太湖湖泛',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/lake-flooding-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/lake-flooding-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/lake-flooding-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/lake-flooding-fourth',
                        }]
                },
                {
                    title: '重污染天气',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/pollution-weather-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/pollution-weather-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/pollution-weather-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/pollution-weather-fourth',
                        }]
                },
                {
                    title: '核应急',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/nuclear-event-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/nuclear-event-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/nuclear-event-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/nuclear-event-fourth',
                        }]
                },
                {
                    title: '特种设备',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/special-equipment-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/special-equipment-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/special-equipment-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/special-equipment-fourth',
                        }]
                },
                {
                    title: '铁路事故',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/railway-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/railway-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/railway-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/railway-accident-fourth',
                        }]
                },
                {
                    title: '港口危险化学品',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/port-provincial-linkageous-chemicals-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/port-provincial-linkageous-chemicals-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/port-provincial-linkageous-chemicals-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/port-provincial-linkageous-chemicals-fourth',
                        }]
                },
                {
                    title: '大面积停电',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/blackout-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/blackout-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/blackout-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/blackout-fourth',
                        }]
                },
                {
                    title: '重特大火灾',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/fire-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/fire-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/fire-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/fire-accident-fourth',
                        }]
                },
                {
                    title: '通信保障',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/communication-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/communication-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/communication-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/communication-fourth',
                        }]
                },
                {
                    title: '危险化学品',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/hazardous-chemicals-pro-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/hazardous-chemicals-pro-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/hazardous-chemicals-pro-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/provincial-linkage/hazardous-chemicals-pro-fourth',
                        }]
                },
                {
                    title: '生产安全',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/production-safety-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/production-safety-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/production-safety-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/production-safety-fourth',
                        }]
                },
                {
                    title: '森林火灾',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/forest-fire-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/forest-fire-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/forest-fire-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/forest-fire-fourth',
                        }]
                },
                {
                    title: '水上搜救',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/water-search-rescue-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/water-search-rescue-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/water-search-rescue-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/water-search-rescue-fourth',
                        }]
                },
                {
                    title: '轨道交通运营',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/rail-traffic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/rail-traffic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/rail-traffic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/accident-disaster/rail-traffic-fourth',
                        }]
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
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/food-safety-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/food-safety-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/food-safety-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/food-safety-fourth',
                        },
                    ]
                },
                {
                    title: '突发公共卫生',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/public-health-event-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/public-health-event-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/public-health-event-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/public-health-event-fourth',
                        },
                    ]
                },
                {
                    title: '公共卫生医疗救急',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/medical-aid-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/medical-aid-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/medical-aid-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/medical-aid-fourth',
                        },
                    ]
                },
                {
                    title: '鼠疫控制',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/plague-control-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/plague-control-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/plague-control-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/plague-control-fourth',
                        },
                    ]
                },
                {
                    title: '流感',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/influenza-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/influenza-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/influenza-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/influenza-fourth',
                        },
                    ]
                },
                {
                    title: '动物疫情',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/animal-epidemic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/animal-epidemic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/animal-epidemic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/animal-epidemic-fourth',
                        },
                    ]
                },
                {
                    title: '药品医疗器械',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/safety-medical-devices-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/safety-medical-devices-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/safety-medical-devices-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/public-health/safety-medical-devices-fourth',
                        },
                    ]
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
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/terrorist-attacks-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/terrorist-attacks-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/terrorist-attacks-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/terrorist-attacks-fourth',
                        },
                    ]
                },
                {
                    title: '群体性事件',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/mass-incident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/mass-incident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/mass-incident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/mass-incident-fourth',
                        },
                    ]
                },
                {
                    title: '价格异动',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/price-changes-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/price-changes-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/price-changes-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/price-changes-fourth',
                        },
                    ]
                },
                {
                    title: '粮食应急',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/grain-emergency-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/grain-emergency-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/grain-emergency-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/grain-emergency-fourth',
                        },
                    ]
                },
                {
                    title: '网络与信息安全',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/network-information-security-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/network-information-security-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/network-information-security-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/network-information-security-fourth',
                        },
                    ]
                },
                {
                    title: '涉外突发',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/foreign-affairs-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/foreign-affairs-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/foreign-affairs-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/foreign-affairs-fourth',
                        },
                    ]
                },
                {
                    title: '金融突发',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/financial-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/financial-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/financial-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/financial-accident-fourth',
                        },
                    ]
                },
                {
                    title: '政府性债务',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/government-debt-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/government-debt-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/government-debt-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/government-debt-fourth',
                        },
                    ]
                },
                {
                    title: '军粮应急',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/commissary-emergency-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/commissary-emergency-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/commissary-emergency-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/commissary-emergency-fourth',
                        },
                    ]
                },
                {
                    title: '救灾物资',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/relief-supplies-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/relief-supplies-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/relief-supplies-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-provincial/social-security/relief-supplies-fourth',
                        },
                    ]
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
