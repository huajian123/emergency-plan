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
                            title: '汛旱灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/natural-drought-and-flood-level',
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
                            title: '地震灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/natural-earthquake-level',
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
                            title: '气象灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/natural-meteorological-level',
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
                            title: '自然灾害救助判别',
                            selected: false,
                            path: '/hazard-status/status-warning/natural-relief-level',
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
                            title: '地质灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/natural-geological-level',
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
                            title: '台风灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/typhoon-level',
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
                            title: '道路交通灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-road-traffic-level',
                        }]
                },
                {
                    title: '突发环境',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '突发环境灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-environmental-level',
                        }]
                },
                {
                    title: '辐射',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '辐射灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-radiation-level',
                        }]
                },
                {
                    title: '太湖蓝藻',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '太湖蓝藻灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-algae-outbreak-level',
                        }]
                },
                {
                    title: '太湖湖泛',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '太湖湖泛判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-lake-flooding-level',
                        }]
                },
                {
                    title: '重污染天气',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '重污染天气判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-pollution-weather-level',
                        }]
                },
                {
                    title: '核应急',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '核应急判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-nuclear-event-level',
                        }]
                },
                {
                    title: '特种设备',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '特种设备判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-special-equipment-level',
                        }]
                },
                {
                    title: '铁路事故',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '铁路事故判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-railway-accident-level',
                        }]
                },
                {
                    title: '港口危险化学品',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '港口危险化学品判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-port-hazardous-chemicals-level',
                        }]
                },
                {
                    title: '大面积停电',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '大面积停电判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-blackout-level',
                        }]
                },
                {
                    title: '重特大火灾',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '重特大火灾判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-fire-accident-level',
                        }]
                },
                {
                    title: '通信保障',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '通信保障判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-communication-level',
                        }]
                },
                {
                    title: '危险化学品',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '危险化学品判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-hazardous-chemicals-level',
                        }]
                },
                {
                    title: '生产安全',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '生产安全判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-production-safety-level',
                        }]
                },
                {
                    title: '森林火灾',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '森林火灾判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-forest-fire-level',
                        }]
                },
                {
                    title: '水上搜救',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '水上搜救判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-water-search-rescue-level',
                        }]
                },
                {
                    title: '轨道交通运营',
                    icon: 'bars',
                    open: false,
                    selected: false,
                    children: [
                        {
                            title: '轨道交通运营判别',
                            selected: false,
                            path: '/hazard-status/status-warning/accident-rail-traffic-level',
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
                            title: '食品安全判别',
                            selected: false,
                            path: '/hazard-status/status-warning/public-food-safety-level',
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
                            title: '公共卫生判别',
                            selected: false,
                            path: '/hazard-status/status-warning/public-health-event-level',
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
                            title: '医疗救急判别',
                            selected: false,
                            path: '/hazard-status/status-warning/public-medical-aid-level',
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
                            title: '鼠疫灾害控制判别',
                            selected: false,
                            path: '/hazard-status/status-warning/public-plague-control-level',
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
                            title: '流感疫情判别',
                            selected: false,
                            path: '/hazard-status/status-warning/public-influenza-level',
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
                            title: '动物疫情判别',
                            selected: false,
                            path: '/hazard-status/status-warning/public-animal-epidemic-level',
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
                            title: '药品医疗器械判别',
                            selected: false,
                            path: '/hazard-status/status-warning/public-medical-devices-level',
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
                            title: '恐怖袭击判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-terrorist-attacks-level',
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
                            title: '群体性事件判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-mass-incident-level',
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
                            title: '价格异动判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-price-changes-level',
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
                            title: '粮食应急危机判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-grain-emergency-level',
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
                            title: '网络与信息安全判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-network-information-level',
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
                            title: '涉外突发灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-foreign-affairs-level',
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
                            title: '金融突发灾害判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-financial-accident-level',
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
                            title: '政府性债务危机判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-government-debt-level',
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
                            title: '军粮应急危机判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-commissary-emergency-level',
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
                            title: '救灾物资应急判别',
                            selected: false,
                            path: '/hazard-status/status-warning/social-relief-supplies-level',
                        },
                    ]
                },

            ]
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
