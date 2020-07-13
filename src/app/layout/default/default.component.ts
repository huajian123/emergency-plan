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
                    title: '重特大道路交通',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '一级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/road-traffic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/road-traffic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/road-traffic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/road-traffic-fourth',
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
                            path: '/hazard/accident-disaster/environmental-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/environmental-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/environmental-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/environmental-fourth',
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
                            path: '/hazard/accident-disaster/radiation-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/radiation-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/radiation-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/radiation-accident-fourth',
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
                            path: '/hazard/accident-disaster/algae-outbreak-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/algae-outbreak-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/algae-outbreak-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/algae-outbreak-fourth',
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
                            path: '/hazard/accident-disaster/lake-flooding-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/lake-flooding-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/lake-flooding-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/lake-flooding-fourth',
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
                            path: '/hazard/accident-disaster/pollution-weather-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/pollution-weather-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/pollution-weather-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/pollution-weather-fourth',
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
                            path: '/hazard/accident-disaster/nuclear-event-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/nuclear-event-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/nuclear-event-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/nuclear-event-fourth',
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
                            path: '/hazard/accident-disaster/special-equipment-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/special-equipment-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/special-equipment-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/special-equipment-fourth',
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
                            path: '/hazard/accident-disaster/railway-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/railway-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/railway-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/railway-accident-fourth',
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
                            path: '/hazard/accident-disaster/port-hazardous-chemicals-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/port-hazardous-chemicals-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/port-hazardous-chemicals-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/port-hazardous-chemicals-fourth',
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
                            path: '/hazard/accident-disaster/blackout-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/blackout-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/blackout-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/blackout-fourth',
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
                            path: '/hazard/accident-disaster/fire-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/fire-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/fire-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/fire-accident-fourth',
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
                            path: '/hazard/accident-disaster/communication-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/communication-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/communication-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/communication-fourth',
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
                            path: '/hazard/accident-disaster/hazardous-chemicals-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/hazardous-chemicals-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/hazardous-chemicals-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/hazardous-chemicals-fourth',
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
                            path: '/hazard/accident-disaster/production-safety-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/production-safety-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/production-safety-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/production-safety-fourth',
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
                            path: '/hazard/accident-disaster/forest-fire-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/forest-fire-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/forest-fire-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/forest-fire-fourth',
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
                            path: '/hazard/accident-disaster/water-search-rescue-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/water-search-rescue-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/water-search-rescue-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/water-search-rescue-fourth',
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
                            path: '/hazard/accident-disaster/rail-traffic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/rail-traffic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/rail-traffic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/accident-disaster/rail-traffic-fourth',
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
                            path: '/hazard/public-health/food-safety-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/food-safety-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/food-safety-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/food-safety-fourth',
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
                            path: '/hazard/public-health/public-health-event-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/public-health-event-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/public-health-event-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/public-health-event-fourth',
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
                            path: '/hazard/public-health/medical-aid-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/medical-aid-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/medical-aid-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/medical-aid-fourth',
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
                            path: '/hazard/public-health/plague-control-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/plague-control-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/plague-control-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/plague-control-fourth',
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
                            path: '/hazard/public-health/influenza-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/influenza-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/influenza-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/influenza-fourth',
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
                            path: '/hazard/public-health/animal-epidemic-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/animal-epidemic-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/animal-epidemic-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/animal-epidemic-fourth',
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
                            path: '/hazard/public-health/safety-medical-devices-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/safety-medical-devices-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/safety-medical-devices-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/public-health/safety-medical-devices-fourth',
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
                            path: '/hazard/social-security/terrorist-attacks-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/terrorist-attacks-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/terrorist-attacks-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/terrorist-attacks-fourth',
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
                            path: '/hazard/social-security/mass-incident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/mass-incident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/mass-incident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/mass-incident-fourth',
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
                            path: '/hazard/social-security/price-changes-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/price-changes-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/price-changes-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/price-changes-fourth',
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
                            path: '/hazard/social-security/grain-emergency-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/grain-emergency-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/grain-emergency-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/grain-emergency-fourth',
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
                            path: '/hazard/social-security/network-information-security-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/network-information-security-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/network-information-security-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/network-information-security-fourth',
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
                            path: '/hazard/social-security/foreign-affairs-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/foreign-affairs-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/foreign-affairs-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/foreign-affairs-fourth',
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
                            path: '/hazard/social-security/financial-accident-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/financial-accident-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/financial-accident-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/financial-accident-fourth',
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
                            path: '/hazard/social-security/government-debt-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/government-debt-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/government-debt-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/government-debt-fourth',
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
                            path: '/hazard/social-security/commissary-emergency-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/commissary-emergency-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/commissary-emergency-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/commissary-emergency-fourth',
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
                            path: '/hazard/social-security/relief-supplies-first',
                        },
                        {
                            title: '二级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/relief-supplies-second',
                        },
                        {
                            title: '三级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/relief-supplies-third',
                        },
                        {
                            title: '四级灾害',
                            open: false,
                            selected: false,
                            path: '/hazard/social-security/relief-supplies-fourth',
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
