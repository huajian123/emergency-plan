import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

export enum DateFormat {
    Date = 'yyyy-MM-dd',
    DateHour = 'yyyy-MM-dd HH',
    DateTime = 'yyyy-MM-dd HH:mm',
}

export enum MapKeyType {
    String,
    Number,
    Boolean
}

export const MapSet = {
        accidentType: {
            1: '自燃灾害类',
            2: '事故灾害类',
            3: '公共卫生类',
            4: '社会安全类',
        },
        naturalDisastersType: {
            1: '防汛防旱',
            2: '地震',
            3: '气象灾害',
            4: '自然灾害',
            5: '地质灾害',
            6: '台风',
        },
        accidentDisastersType: {
            1: '重特大道路交通',
            2: '突发环境',
            3: '辐射',
            4: '太湖蓝藻',
            5: '太湖湖泛',
            6: '重污染天气',
            7: '核应急',
            8: '特种设备',
            9: '铁路事故',
            10: '港口危险化学品',
            11: '大面积停电',
            12: '重特大火灾',
            13: '通信保障',
            14: '危险化学品',
            15: '生产安全',
            16: '森林火灾',
            17: '水上搜救',
            18: '轨道交通运营',
        },
        publicHealthType: {
            1: '食品安全',
            2: '突发公共卫生',
            3: '公共卫生医疗救急',
            4: '鼠疫控制',
            5: '流感',
            6: '动物疫情',
            7: '药品医疗器械',
        },
        socialSecurityType: {
            1: '恐怖袭击',
            2: '群体性事件',
            3: '价格异动',
            4: '粮食应急',
            5: '网络与信息安全',
            6: '涉外突发',
            7: '金融突发',
            8: '政府性债务',
            9: '军粮应急',
            10: '救灾物资',
        },
    }
;

export interface MapItem {
    label: string;
    value: any;
}

@Pipe({
    name: 'map',
})
export class MapPipe implements PipeTransform {
    private datePipe: DatePipe = new DatePipe('en-US');
    private mapObj = MapSet;

    static transformMapToArray(data: any, mapKeyType: MapKeyType = MapKeyType.Number): MapItem[] {
        return Object.keys(data || {}).map(key => {
            let value: any;
            switch (mapKeyType) {
                case MapKeyType.Number:
                    value = Number(key);
                    break;
                case MapKeyType.Boolean:
                    value = key === 'true';
                    break;
                case MapKeyType.String:
                default:
                    value = key;
                    break;
            }
            return {value, label: data[key]};
        });
    }

    transform(value: any, arg?: any): any {
        if (arg === undefined) {
            return value;
        }
        let type: string = arg;
        let param = '';

        if (arg.indexOf(':') !== -1) {
            type = arg.substring(0, arg.indexOf(':'));
            param = arg.substring(arg.indexOf(':') + 1, arg.length);
        }

        switch (type) {
            case 'date':
                return this.datePipe.transform(value, param);
            default:
                return (this.mapObj[type] ? this.mapObj[type][value] : '');
        }
    }
}
