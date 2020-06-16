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
    disasterType: {
        1: '自燃灾害类',
        2: '事故灾害类',
        3: '公共卫生类',
        4: '社会安全类',
    },
};

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
