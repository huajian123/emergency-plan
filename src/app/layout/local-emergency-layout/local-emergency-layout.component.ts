import {Component, OnDestroy, OnInit} from '@angular/core';
import {Menu} from '../default/sidebar-nav/sidebar-nav.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-local-emergency-layout',
    templateUrl: './local-emergency-layout.component.html',
    styleUrls: ['./local-emergency-layout.component.less']
})
export class LocalEmergencyLayoutComponent implements OnInit, OnDestroy {
    isCollapsed = false;
    menus: Menu[] = [
        {
            title: '总预案',
            icon: 'icontotal',
            open: false,
            selected: false,
            path: '/hazard-regional-response/local-emergency/total-plan',
        },
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
                            path: '/hazard-regional-response/local-emergency/drought-and-flood-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/drought-and-flood-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/drought-and-flood-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/drought-and-flood-fourth',
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
                            path: '/hazard-regional-response/local-emergency/earthquake-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/earthquake-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/earthquake-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/earthquake-disaster-fourth',
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
                            path: '/hazard-regional-response/local-emergency/meteorological-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/meteorological-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/meteorological-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/meteorological-disaster-fourth',
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
                            path: '/hazard-regional-response/local-emergency/natural-disaster-relief-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/natural-disaster-relief-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/natural-disaster-relief-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/natural-disaster-relief-fourth',
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
                            path: '/hazard-regional-response/local-emergency/geological-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/geological-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/geological-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/geological-disaster-fourth',
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
                            path: '/hazard-regional-response/local-emergency/typhoon-disaster-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/typhoon-disaster-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/typhoon-disaster-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/typhoon-disaster-fourth',
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
                            path: '/hazard-regional-response/local-emergency/road-traffic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/road-traffic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/road-traffic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/road-traffic-fourth',
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
                            path: '/hazard-regional-response/local-emergency/environmental-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/environmental-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/environmental-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/environmental-fourth',
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
                            path: '/hazard-regional-response/local-emergency/radiation-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/radiation-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/radiation-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/radiation-accident-fourth',
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
                            path: '/hazard-regional-response/local-emergency/algae-outbreak-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/algae-outbreak-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/algae-outbreak-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/algae-outbreak-fourth',
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
                            path: '/hazard-regional-response/local-emergency/lake-flooding-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/lake-flooding-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/lake-flooding-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/lake-flooding-fourth',
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
                            path: '/hazard-regional-response/local-emergency/pollution-weather-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/pollution-weather-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/pollution-weather-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/pollution-weather-fourth',
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
                            path: '/hazard-regional-response/local-emergency/nuclear-event-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/nuclear-event-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/nuclear-event-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/nuclear-event-fourth',
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
                            path: '/hazard-regional-response/local-emergency/special-equipment-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/special-equipment-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/special-equipment-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/special-equipment-fourth',
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
                            path: '/hazard-regional-response/local-emergency/railway-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/railway-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/railway-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/railway-accident-fourth',
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
                            path: '/hazard-regional-response/local-emergency/port-local-emergencyous-chemicals-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/port-local-emergencyous-chemicals-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/port-local-emergencyous-chemicals-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/port-local-emergencyous-chemicals-fourth',
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
                            path: '/hazard-regional-response/local-emergency/blackout-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/blackout-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/blackout-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/blackout-fourth',
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
                            path: '/hazard-regional-response/local-emergency/fire-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/fire-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/fire-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/fire-accident-fourth',
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
                            path: '/hazard-regional-response/local-emergency/communication-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/communication-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/communication-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/communication-fourth',
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
                            path: '/hazard-regional-response/local-emergency/hazardous-chemicals-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/hazardous-chemicals-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/hazardous-chemicals-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/hazardous-chemicals-fourth',
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
                            path: '/hazard-regional-response/local-emergency/production-safety-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/production-safety-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/production-safety-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/production-safety-fourth',
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
                            path: '/hazard-regional-response/local-emergency/forest-fire-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/forest-fire-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/forest-fire-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/forest-fire-fourth',
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
                            path: '/hazard-regional-response/local-emergency/water-search-rescue-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/water-search-rescue-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/water-search-rescue-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/water-search-rescue-fourth',
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
                            path: '/hazard-regional-response/local-emergency/rail-traffic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/rail-traffic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/rail-traffic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/rail-traffic-fourth',
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
                            path: '/hazard-regional-response/local-emergency/food-safety-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/food-safety-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/food-safety-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/food-safety-fourth',
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
                            path: '/hazard-regional-response/local-emergency-event-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency-event-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency-event-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency-event-fourth',
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
                            path: '/hazard-regional-response/local-emergency/medical-aid-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/medical-aid-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/medical-aid-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/medical-aid-fourth',
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
                            path: '/hazard-regional-response/local-emergency/plague-control-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/plague-control-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/plague-control-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/plague-control-fourth',
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
                            path: '/hazard-regional-response/local-emergency/influenza-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/influenza-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/influenza-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/influenza-fourth',
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
                            path: '/hazard-regional-response/local-emergency/animal-epidemic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/animal-epidemic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/animal-epidemic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/animal-epidemic-fourth',
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
                            path: '/hazard-regional-response/local-emergency/safety-medical-devices-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/safety-medical-devices-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/safety-medical-devices-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/safety-medical-devices-fourth',
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
                            path: '/hazard-regional-response/local-emergency/terrorist-attacks-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/terrorist-attacks-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/terrorist-attacks-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/terrorist-attacks-fourth',
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
                            path: '/hazard-regional-response/local-emergency/mass-incident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/mass-incident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/mass-incident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/mass-incident-fourth',
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
                            path: '/hazard-regional-response/local-emergency/price-changes-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/price-changes-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/price-changes-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/price-changes-fourth',
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
                            path: '/hazard-regional-response/local-emergency/grain-emergency-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/grain-emergency-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/grain-emergency-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/grain-emergency-fourth',
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
                            path: '/hazard-regional-response/local-emergency/network-information-security-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/network-information-security-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/network-information-security-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/network-information-security-fourth',
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
                            path: '/hazard-regional-response/local-emergency/foreign-affairs-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/foreign-affairs-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/foreign-affairs-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/foreign-affairs-fourth',
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
                            path: '/hazard-regional-response/local-emergency/financial-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/financial-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/financial-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/financial-accident-fourth',
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
                            path: '/hazard-regional-response/local-emergency/government-debt-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/government-debt-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/government-debt-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/government-debt-fourth',
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
                            path: '/hazard-regional-response/local-emergency/commissary-emergency-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/commissary-emergency-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/commissary-emergency-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/commissary-emergency-fourth',
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
                            path: '/hazard-regional-response/local-emergency/relief-supplies-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/relief-supplies-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/relief-supplies-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard-regional-response/local-emergency/relief-supplies-fourth',
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
