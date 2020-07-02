export enum PageTypeEnum {
    List = 1,
    AddOrEdit,
    DetailOrExamine
}

export enum NaturalEnum {
    DroughtAndFlood = 1,
    Earthquake = 2,
    Meteorological = 3,
    NaturalRelief = 4,
    Geological = 5,
    Typhoon = 6
}

export enum AccidentEnum {
    RoadTraffic = 7,
    Environmental = 8,
    RadiationAccident = 9,
    AlgaeOutbreak = 10,
    LakeFlooding = 11,
    PollutionWeather = 12,
    NuclearEvent = 13,
    SpecialEquipment = 14,
    RailwayAccident = 15,
    PortHazardousChemicals = 16,
    Blackout = 17,
    FireAccident = 18,
    communication = 19,
    HazardousChemicals = 20,
    ProductionSafety = 21,
    forestFire = 22,
    WaterSearchRescue = 23,
    RailTraffic = 24
}

export enum PublicHealthEnum {
    FoodSafety = 25,
    PublicHealth = 26,
    MedicalAid = 27,
    PlagueControl = 28,
    Influenza = 29,
    AnimalEpidemic = 30,
    SafetyMmedicalDevices = 31
}

export enum SocialSecurityEnum {
    TerroristAttacks = 32,
    MassIncident = 33,
    PriceChanges = 34,
    GrainEmergency = 35,
    NetworkInformationSecurity = 36,
    ForeignAffairs = 37,
    Financial = 38,
    GovernmentDebt = 39,
    CommissaryEmergency = 40,
    ReliefSupplies = 41
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
