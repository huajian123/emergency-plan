export enum PageTypeEnum {
    List = 1,
    AddOrEdit,
    DetailOrExamine
}


export interface LoginInfoModel {
    id?: number;
    account: string;
    password: string;
    createBy: string;
    createTime: Date;
    updateBy: string;
    updateTime: Date;
    role: number;
}


/*export interface OptionsInterface {
    value: string | number;
    label: string;
}*/
