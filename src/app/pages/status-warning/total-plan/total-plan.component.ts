import {Component, OnInit} from '@angular/core';
import {CitiesNameModel, CitiesNameService} from '../../../services/biz-services/earthquake-warning-list.service';
import {Indicator} from './criteria-detail/criteria-detail.component';
import {OptionsInterface} from '../natural-disaster-warning/earthquake-warning/earthquake-warning.component';
import {PageTypeEnum} from '../../../core/vo-common/BusinessEnum';

export interface OptionsInterfac {
    value: number;
    label: string;
}

export interface SelectedInterface {
    province: string;
    city: string;
}

interface Introduction {
    kind: string;
    disaster: {
        name: string;
        subName: string;
        desc: string[];
        goDetail: (name: string) => void;
    }[];

}

@Component({
    selector: 'app-total-plan',
    templateUrl: './total-plan.component.html',
    styleUrls: ['./total-plan.component.less']
})
export class TotalPlanComponent implements OnInit {
    provinceData: OptionsInterface[];
    cityData: OptionsInterface[];
    selected: SelectedInterface;
    dataInfo: CitiesNameModel[];
    indicator: Indicator[];
    selIndicator: Indicator;
    indicatorIntro: Introduction[];
    pageTypeEnum = PageTypeEnum;
    currentPage: number;

    constructor(private dataService: CitiesNameService) {
        this.selIndicator = {
            disasterName: '',
            twoLevel: [],
            oneLevel: [],
        };
        this.provinceData = [];
        this.cityData = [];
        this.selected = {
            province: '',
            city: ''
        };
        this.indicator = [
            {
                disasterName: '水旱灾害',
                oneLevel: [
                    '一个流域发生特大洪水，或多个流域同时发生大洪水',
                    '长江大河等干流重要河段堤防发生决口',
                    '重点大型水库发生垮坝',
                    '洪水造成铁路繁忙干线、国家高速公路网和主要航道中断，４８小时无法恢复通行0',
                    '包括我省在内的多个省（区、市）发生特大干旱',
                    '多个市发生极度干旱',
                    '农作物受涝或受旱面积２０００万亩以上，或农作物绝收面积３００万亩以上',
                ],
                twoLevel: [
                    '一个流域或其部分区域发生大洪水',
                    '长江大河等干流一般河段及主要支流堤防发生决口或出现重大险情',
                    '多个市发生严重洪涝灾害',
                    '一般大中型水库发生垮坝或出现对下游安全造成直接影响的重大险情',
                    '洪水造成铁路干线、国家高速公路网和航道通行中断，２４小时无法恢复通行',
                    '全省发生严重干旱，或数市发生特大干旱',
                    '农作物受涝或受旱面积１５００万亩以上、２０００万亩以下；或绝收２００万亩以上，３００万亩以下',
                ],
            },
            {
                disasterName: '气象灾害',
                oneLevel: [
                    '特大暴雨、大雪、龙卷风、台风等极端天气气候事件影响重要城市和５０平方公里以上较大区域，造成３０人以上死亡，或５０００万元以上经济损失的气象灾害',
                    '全省范围内将出现极端天气气候事件或极强灾害性天气过程，并会造成特大人员伤亡和巨大经济损失的气象灾害',
                    '在其他省（区、市）和地区发生的，可能对我省经济社会产生重大影响的极端天气气候事件',
                    '农作物受灾面积２０００万亩以上，或农作物绝收３００万亩以上',
                ],
                twoLevel: [
                    '暴雨、冰雹、龙卷风、大雪、寒潮、大风和台风等造成１０人以上、３０人以下死亡，或１０００万元以上、５０００万元以下经济损失的气象灾害',
                    '对社会、经济及群众生产、生活等造成严重影响的高温、干旱、大雾、低温、霜冻、雷电等气象灾害',
                    '因各种气象原因，造成机场、港口、国家高速公路网线路连续封闭１２小时以上的',
                    '农作物受灾面积１５００万亩以上、２０００万亩以下，或农作物绝收２００万亩以上、３００万亩以下',
                ],
            },
            {
                disasterName: '地震灾害',
                oneLevel: [
                    '造成３００人以上死亡，直接经济损失占全省上年地区生产总值１％以上的地震',
                    '发生在人口较密集地区７级以上地震',
                ],
                twoLevel: [
                    '造成５０人以上、３００人以下死亡，或造成一定经济损失的地震',
                    '发生在我省人口密集地区４级以上地震',
                    '发生在我省其他地区５级以上地震',
                    '发生在周边省（市）６.５级以上地震',
                    '震级未达到上述标准但造成重大经济损失和人员伤亡损失或严重影响的地震',
                ],
            },
            {
                disasterName: '地质灾害',
                oneLevel: [
                    '因山体崩塌、滑坡、泥石流、地面塌陷、地裂缝等灾害造成３０人以上死亡，或直接经济损失１０００万元以上的地质灾害',
                    '受地质灾害威胁，需转移人数在１０００人以上，或潜在可能造成的经济损失在１亿元以上的灾害险情',
                    '因地质灾害造成长江大河支流被阻断，严重影响群众生命财产安全',
                ],
                twoLevel: [
                    '因山体崩塌、滑坡、泥石流、地面塌陷、地裂缝等灾害造成１０人以上、３０人以下死亡，或因灾害造成直接经济损失５００万元以上、１０００万元以下的地质灾害',
                    '受地质灾害威胁，需转移人数在５００人以上、１０００人以下，或潜在经济损失５０００万元以上、１亿元以下的灾害险情',
                    '造成铁路繁忙干线、国家高速公路网线路、民航和航道中断，或严重威胁群众生命财产安全、有重大社会影响的地质灾害',
                ],
            },

            {
                disasterName: '海洋灾害',
                oneLevel: [
                    '风暴潮、巨浪、海啸、赤潮等造成３０人以上死亡，或５０００万元以上经济损失的海洋灾害',
                    '对沿海重要城市或５０平方公里以上较大区域经济、社会和群众生产、生活等造成特别严重影响的海洋灾害',
                ],
                twoLevel: [
                    '风暴潮、巨浪、海啸、赤潮等造成１０人以上、３０人以下死亡，或１０００万元以上、５０００万元以下经济损失的海洋灾害',
                    '对沿海经济、社会和群众生产、生活等造成严重影响的海洋灾害',
                    '对大型海上工程设施等造成重大损坏，或严重破坏海洋生态环境的海洋灾害',
                ],
            },

            {
                disasterName: '生物灾害',
                oneLevel: [
                    '在包括我省在内的２个以上省（市）病虫草等有害生物暴发流行，或新传入我国的有害生物在包括我省在内的２个以上省（市）内发生，或在省内２个以上市发生，对农业和林业造成巨大危害的生物灾害',
                ],
                twoLevel: [
                    '因蝗虫、水稻条纹叶枯病、稻飞虱、水稻螟虫、小麦条锈病、松毛虫、杨树食叶害虫和蛀干类害虫等大面积成灾并造成严重经济损失的生物灾害',
                    '新传入我国的有害生物在我省发生、流行，对农业和林业生产等造成严重威胁的生物灾害',
                ],
            },

            {
                disasterName: '森林火灾',
                oneLevel: [
                    '受害森林面积超过１０００公顷、火场仍未得到有效控制的火灾',
                    '造成３０人以上死亡或造成重大影响和财产损失的森林火灾',
                    '距重要军事目标和大型军工、危险化学品生产企业不足１公里的森林火灾',
                    '严重威胁或烧毁城镇、居民地、重要设施的，或需要国家支援的森林火灾',
                ],
                twoLevel: [
                    '连续燃烧超过７２小时没有得到控制的森林火灾',
                    '受害森林面积超过３００公顷以上、１０００公顷以下的火灾',
                    '造成１０人以上、３０人以下死亡的森林火灾',
                    '威胁居民地、重要设施，或位于省（市）交界地区，危险性较大的森林火灾',
                ],
            },

            {
                disasterName: '安全事故',
                oneLevel: [
                    '造成３０人以上死亡（含失踪），或危及３０人以上生命安全，或１亿元以上直接经济损失，或１００人以上中毒（重伤），或需要紧急转移安置１０万人以上的安全事故',
                    '国内外民用运输航空器在我省境内发生的，或我省民用运输航空器在省外发生的坠机、撞机或紧急迫降等情况导致的特别重大飞行事故',
                    '危及３０人以上生命安全的水上突发事件，或水上保安事件，或单船１００００吨以上国内外民用运输船舶在我省境内发生碰撞、火灾等对船舶及人员生命安全以及港口设施安全造成严重威胁的水上突发事件',
                    '铁路繁忙干线、国家高速公路网线路遭受破坏，造成行车中断，经抢修４８小时内无法恢复通车',
                    '重要港口瘫痪或遭受灾难性损失，长江大河等干线航道发生断航２４小时以上',
                    '造成区域电网减供负荷达到事故前总负荷的３０％以上，或造成重要城市减供负荷达到事故前总负荷的５０％以上；或因重要发电厂、变电站、输变电设备遭受毁灭性破坏或打击，造成区域电网大面积停电，减供负荷达到事故前的２０％以上，对区域电网、跨区电网安全稳定运行构成严重威胁',
                    '全省通信故障或大面积骨干网中断、通信枢纽遭到破坏等造成严重影响的事故',
                    '因自然灾害等不可抗拒的原因导致支付、清算系统处理中心发生故障或因人为破坏，造成整个支付、清算系统瘫痪的事故',
                    '城市５万户以上居民供气或供水连续停止４８小时以上的事故',
                    '造成特别重大影响或损失的特种设备事故',
                    '大型集会和游园等群体性活动中，因拥挤、踩踏等造成３０人以上死亡的事故',
                ],
                twoLevel: [
                    '造成１０人以上、３０人以下死亡（含失踪），或危及１０人以上、３０人以下生命安全，或直接经济损失５０００万元以上、１亿元以下的事故，或５０人以上，１００人以下中毒（重伤），或需紧急转移安置５万人以上、１０万人以下的事故',
                    '国内外民用运输航空器在我省境内，或我省民用运输航空器在省外发生重大飞行事故',
                    '危及１０人以上、３０人以下生命安全的水上突发事件或水上保安事件；３０００吨以上、１００００吨以下的非客船、非危险化学品船发生碰撞、火灾等对船舶及人员生命安全造成威胁的水上突发事件',
                    '铁路繁忙干线、国家高速公路网线路遭受破坏，或因灾严重损毁，造成通行中断，经抢修２４小时内无法恢复通车',
                    '重要港口遭受严重损坏，长江大河干线等重要航道断航１２小时以上、２４小时以内',
                    '造成跨区电网或区域电网减供负荷达到事故前总负荷的１０％以上、３０％以下，或造成城市减供负荷达到事故前总负荷的２０％以上、５０％以下',
                    '造成重大影响和损失的通信、信息网络、特种设备事故和城市轨道、道路交通、大中城市供水、燃气设施供应中断，或造成３万户以上居民停水、停气２４小时以上的事故',
                    '大型集会和游园等群体性活动中，因拥挤、踩踏等造成１０人以上、３０人以下死亡的事故',
                    '其他一些无法量化但性质严重，对社会稳定、经济建设造成重大影响的事故',
                ],
            },

            {
                disasterName: '环境污染和生态破坏事故',
                oneLevel: [
                    '发生３０人以上死亡，或１００人以上中毒（重伤），或因环境事件需疏散、转移群众５万人以上，或直接经济损失１０００万元以上，或区域生态功能严重丧失，或濒危物种生存环境遭到严重污染，或因环境污染使当地正常的经济、社会秩序受到严重影响，或１、２类放射源失控造成大范围严重辐射污染后果的',
                    '因环境污染造成重要城市主要水源地取水中断的污染事故',
                    '因危险化学品（含剧毒品）生产和贮运中发生泄漏，严重影响人民群众生产、生活和生态环境的污染事故',
                    '核设施发生需要进入场外应急的严重核事故，或事故辐射后果可能影响邻省（市）的，或按照“国际核事件分级（ＩＮＥＳ）标准”３级以上的核事件',
                    '高致病病毒、细菌等微生物在实验室研究过程中造成的特大污染事故',
                    '转基因生物对人类、动物、植物、微生物和生态系统构成严重威胁，或造成高度侵袭性、传染性、转移性、致病性和破坏性的灾害',
                    '周边地区核设施中发生的按照“国际核事件分级（ＩＮＥＳ）标准”属于４级以上的核事故',
                    '盗伐、滥伐、聚众哄抢森林、林木数量达５０００立方米（幼树２５万株）以上的事件，毁林开垦、乱占林地、非法改变林地用途属防护林和特种用途林林地１５００亩以上，属其他林地３０００亩以上的事件',
                ],
                twoLevel: [
                    '发生１０人以上、３０人以下死亡，或５０人以上、１００人以下中毒，或区域生态功能部分丧失或濒危物种生存环境受到污染；或因环境污染使当地经济、社会活动受到较大影响，疏散转移群众１万人以上、５万人以下的；或１、２类放射源丢失、被盗或失控',
                    '因环境污染造成重要河流、湖泊、水库及沿海水域大面积污染，或县级以上城镇水源地取水中断的污染事故',
                    '盗伐、滥伐、聚众哄抢森林、林木数量达１０００－５０００立方米（幼树５万－２５万株）的事件，毁林开垦、乱占林地、非法改变林地用途属防护林和特种用途林林地５００－１５００亩，属其他林地１０００－３０００亩的事件',
                    '对国家级自然保护区和风景名胜区造成重大直接经济损失的环境污染事故，或资源开发造成严重环境污染和生态破坏，可能导致主要保护对象或其栖息地遭受毁灭性破坏，或直接威胁当地群众生产、生活和游客安全的事故',
                    '由于自然、生物、人为因素造成国家重点保护野生动（植）物种群大批死亡或可能造成物种灭绝事件',
                    '核设施发生达到进入场区应急状态标准的事件',
                    '进口再生原料严重环保超标和进口货物严重核辐射超标或含有爆炸物品的事件',
                    '非法倾倒、埋藏剧毒危险废物事件',
                ],
            },

            {
                disasterName: '公共卫生事件',
                oneLevel: [
                    '肺鼠疫、肺炭疽在我省大、中城市发生，疫情有扩散趋势；或肺鼠疫、肺炭疽疫情波及包括我省在内的２个以上的省份，并有进一步扩散趋势',
                    '发生传染性非典型肺炎、人感染高致病性禽流感病例，疫情有扩散趋势',
                    '涉及包括我省在内的多个省份的群体性不明原因疾病，并有扩散趋势',
                    '发生新传染病，或我国尚未发现的传染病在我省发生，并有扩散趋势；或发现我国已消灭的传染病在我省重新流行',
                    '发生烈性病菌株、毒株、致病因子等丢失事件',
                    '对包括我省在内的２个以上省（区、市）造成严重威胁，并有进一步扩散趋势的特别重大食品安全事故',
                    '周边以及与我省通航的国家和地区发生特大传染病疫情，并出现输入性病例，严重危及我省公共卫生安全的事件',
                    '其他危害特别严重的突发公共卫生事件',
                ],
                twoLevel: [
                    '在１个县（市、区）范围内，１个平均潜伏期内发生５例以上肺鼠疫、肺炭疽病例，或相关联的疫情波及２个以上的县（市、区）',
                    '腺鼠疫发生流行，在１个市范围内，１个平均潜伏期内多点连续发病２０例以上，或流行范围波及２个以上市',
                    '发生传染性非典型肺炎、人感染高致病性禽流感疑似病例',
                    '霍乱在１个市范围内流行，１周内发病３０例以上；或疫情波及２个以上市，有扩散趋势',
                    '乙类、丙类传染病疫情波及２个以上县（市、区），１周内发病水平超过前５年同期平均发病水平２倍以上',
                    '我国尚未发现的传染病在我省发生，尚未造成扩散',
                    '发生群体性不明原因疾病，扩散到县（市、区）以外的地区',
                    '发生重大医源性感染事件',
                    '预防接种或群体预防性用药出现人员死亡事件',
                    '对２个以上市造成危害的重大食品安全事故',
                    '一次食物中毒人数超过１００人并出现死亡病例，或出现１０例以上死亡病例',
                    '一次发生急性职业中毒５０人以上，或死亡５人以上',
                    '境内外隐匿运输、邮寄烈性生物病原体、生物毒素造成我省范围内人员感染或死亡的',
                    '其他危害严重的重大突发公共卫生事件',
                ],
            },

            {
                disasterName: '动物疫情',
                oneLevel: [
                    '高致病性禽流感在２１日内，相邻省（市）有１０个以上县（市、区）发生疫情；或在我省２０个以上县（市、区）发生或１０个以上县（市、区）连片发生疫情',
                    '口蹄疫在１４日内，包括我省在内的５个以上省份发生严重疫情，且疫区连片',
                    '动物暴发疯牛病等人畜共患病感染到人，并继续大面积扩散蔓延',
                ],
                twoLevel: [
                    '高致病性禽流感在２１日内，有２个以上市发生疫情，或有２０个以上疫点或５个以上、１０个以下县（市、区）连片发生疫情',
                    '口蹄疫在１４日内，在２个以上相邻市或５个以上县（市、区）发生疫情，或有新的口蹄疫亚型出现并发生疫情',
                    '在１个平均潜伏期内，２０个以上县（市、区）发生猪瘟、新城疫疫情，或疫点数达到３０个以上',
                    '牛瘟、牛肺疫、疯牛病、非洲猪瘟、非洲马瘟等疫病传入我省或在我省发生',
                    '在１个平均潜伏期内，布鲁氏菌病、结核病、狂犬病、链球菌病、炭疽等二类动物疫病呈暴发流行，波及３个以上市，或其中的人畜共患病发生感染人的病例，并有继续扩散趋势',
                ],
            },

            {
                disasterName: '群体性事件',
                oneLevel: [
                    '一次参与人数５０００人以上，严重影响社会稳定的事件',
                    '冲击、围攻县级以上党政军机关和要害部门，打、砸、抢、烧乡镇以上党政军机关的事件',
                    '参与人员对抗性特征突出，已发生大规模的打、砸、抢、烧等违法犯罪行为',
                    '阻断铁路繁忙干线、国道、高速公路和重要交通枢纽、城市交通８小时停运，或阻挠、妨碍国家重点建设工程施工，造成２４小时以上停工事件',
                    '造成１０人以上死亡或３０人以上受伤，严重危害社会稳定的事件',
                    '高校内聚集事件失控，并未经批准走出校门进行大规模游行、集会、绝食、静坐、请愿等行为，引发不同地区连锁反应，严重影响社会稳定',
                    '参与人数５００人以上，或造成重大人员伤亡的群体性械斗、冲突事件',
                    '参与人数在１０人以上的暴狱事件',
                    '出现跨越我省范围的严重影响社会稳定的互动性连锁反应',
                    '其他视情需要作为特别重大群体性事件对待的事件',
                ],
                twoLevel: [
                    '参与人数在１０００人以上、５０００人以下，影响较大的非法集会游行示威、上访请愿、聚众闹事、罢工（市、课）等，或人数不多但涉及面广和有可能进京的非法集会和集体上访事件',
                    '造成３人以上、１０人以下死亡，或１０人以上、３０人以下受伤群体性事件',
                    '高校校园网上出现大范围串联、煽动和蛊惑信息，校内聚集规模迅速扩大并出现多校串联聚集趋势，学校正常教育教学秩序受到严重影响甚至瘫痪，或因高校统一招生试题泄密引发的群体性事件',
                    '参与人数２００人以上、５００人以下，或造成较大人员伤亡的群体性械斗、冲突事件',
                    '涉及境内外宗教组织背景的大型非法宗教活动，或因民族宗教问题引发的严重影响民族团结的群体性事件',
                    '因土地、矿产、水资源、森林、水域、海域等权属争议和环境污染、生态破坏引发的，造成严重后果的群体性事件',
                    '已出现跨越我省范围的影响社会稳定的连锁反应，或造成了较严重的危害和损失，事态仍可能进一步扩大和升级',
                    '其他视情需要作为重大群体性事件对待的事件',
                ],
            },

            {
                disasterName: '涉外突发事件',
                oneLevel: [
                    '一次造成３０人以上死亡或１００人以上伤亡的境外涉及我省或省内涉外事件',
                    '造成我省驻外的机构和人员安全及财产重大损失，造成外国驻我省机构和人员安全及重大财产损失，并具有重大政治和社会影响的涉外事件',
                    '有关国家、地区发生特别重大突发事件，需要迅速撤离我省驻外机构和人员的涉外事件',
                ],
                twoLevel: [
                    '一次事件造成１０人以上、３０人以下死亡，或５０人以上、１００人以下伤亡的境外涉及我省或省内涉外事件',
                    '造成或可能造成我省驻外的机构和人员安全及较大财产损失，造成或可能造成外国驻我省机构和人员安全及财产较大损失，并具有较大政治和社会影响的涉外事件',
                    '有关国家、地区发生重大突发事件，需要尽快撤离我省驻外部分机构和人员的涉外事件',
                ],
            },

            {
                disasterName: '恐怖袭击事件',
                oneLevel: [
                    '利用生物战剂、化学毒剂进行大规模袭击或攻击生产、贮存、运输生化毒物设施、工具的',
                    '利用核爆炸、核辐射进行袭击或攻击核设施、核材料装运工具的',
                    '利用爆炸手段，袭击党政军机关、警卫现场、城市标志性建筑物、公众聚集场所、重要基础设施、主要军事设施、民生设施、航空器的',
                    '劫持航空器、轮船、火车等公共交通工具，造成严重危害后果的',
                    '袭击、劫持警卫对象、国内外重要知名人士及大规模袭击、劫持平民，造成重大影响和危害的',
                    '袭击外国及国际组织驻我省机构、外商投资企业、事务所及其人员寓所等重要、敏感涉外场所的',
                    '大规模攻击机关、军队或民用计算机信息系统，构成重大危害的',
                ],
                twoLevel: [],
            },

            {
                disasterName: '刑事案件',
                oneLevel: [
                    '一次造成１０人以上死亡的杀人、爆炸、纵火、毒气、投放危险物质和邮寄危险物品等案件，或在公共场所造成６人以上死亡的案件，或采取绑架、劫持人质等手段，造成恶劣社会影响或可能造成严重后果的案件',
                    '抢劫金融机构或运钞车，盗窃金融机构现金１００万元以上的案件',
                    '在省内发生的劫持民用运输航空器、客轮和货轮等，或省内民用运输航空器、客轮和货轮等在省外或境外被劫持案件',
                    '抢劫、走私、盗窃军（警）用枪械１０支以上的案件',
                    '危害性大的放射性材料或数量特大的炸药或雷管被盗、丢失案件',
                    '走私危害性大的放射性材料，走私固体废物达１００吨以上的案件',
                    '制贩毒品（海洛因、冰毒）２０公斤以上案件',
                    '盗窃、出卖、泄露及丢失国家秘密资料等可能造成严重后果的案件',
                    '攻击和破坏计算机网络、卫星通信、广播电视传输系统等，并对社会稳定造成特大影响的信息安全案件',
                    '在我省发生的涉外、涉港澳台侨重大刑事案件',
                ],
                twoLevel: [
                    '一次造成公共场所３人以上死亡，或学校内发生的造成人员伤亡、危害严重的杀人、爆炸、纵火、毒气、绑架、劫持人质和投放危险物质案件',
                    '抢劫现金５０万元以上或财物价值２００万元以上，盗窃现金１００万元以上或财物价值３００万元以上，或抢劫金融机构或运钞车，盗窃金融机构现金３０万元以上的案件',
                    '有组织团伙性制售假劣药品、医疗器械和有毒有害食品，对人体健康和生命安全造成威胁的案件',
                    '案值数额在２０００万元以上的走私、骗汇、逃汇、洗钱、金融诈骗案、增值税发票及其他票证案，面值在２００万元以上的制贩假币案件',
                    '因假劣种子、化肥、农药等农用生产资料造成大面积绝收、减产的坑农案件',
                    '非法猎捕、采集国家重点保护野生动植物和破坏物种资源致使物种或种群面临灭绝危险的重大案件',
                    '重大制贩毒品（海洛因、冰毒）案件',
                    '涉及５０人以上，或偷渡人员较多，且有人员伤亡，在国际上造成一定影响的偷渡案件',
                ],
            },

            {
                disasterName: '金融突发事件',
                oneLevel: [
                    '在我省发生的具有全国性影响的金融（含证券、期货）突发事件',
                    '金融行业已出现或将要出现连锁反应，需要各有关部门协同配合共同处置的金融突发事件',
                    '国际上出现的，已经影响或极有可能影响我省金融稳定的金融突发事件',
                ],
                twoLevel: [
                    '对我省金融行业造成影响，但未造成全国性影响的金融突发事件',
                    '我省监管部门不能单独应对，需进行跨省份、跨部门协调的金融突发事件',
                ],
            },

            {
                disasterName: '影响市场稳定的突发事件',
                oneLevel: [
                    '在包括我省在内的２个以上省（市）出现群众大量集中抢购、粮食脱销断档、价格大幅度上涨等粮食市场急剧波动的状况，以及超过我省处置能力的情况',
                    '在２个以上市发生重要生活必需品市场异常波动，供应短缺',
                    '在相邻省（市）的相邻区域有２个以上市发生重要生活必需品市场异常波动，供应短缺',
                    '在包括我省在内的数个省（市）内呈多发态势的重要生活必需品市场异常波动，供应短缺',
                ],
                twoLevel: [
                    '在全省较大范围或大中城市出现粮食市场急剧波动状况',
                    '在南京或２个以上省辖市发生重要生活必需品市场异常波动，供应短缺',
                ],
            },
        ];
        this.indicatorIntro = [
            {
                kind: '自然灾害类',
                disaster: [
                    {
                        goDetail: this.goDetail,
                        name: '水旱灾害',
                        subName: '特别重大水旱灾害包括',
                        desc: ['1: 一个流域发生特大洪水，或多个流域同时发生大洪水。', '2: 长江大河等干流重要河段堤防发生决口。']
                    },
                    {
                        goDetail: this.goDetail,
                        name: '气象灾害',
                        subName: '特别重大气象灾害包括',
                        desc: [
                            '1: 特大暴雨、大雪、龙卷风、台风等极端天气气候事件影响重要城市和５０平方公里以上较大区域，造成３０人以上死亡，或５０００万元以上经济损失的气象灾害。',
                            '2: 全省范围内将出现极端天气气候事件或极强灾害性天气过程，并会造成特大人员伤亡和巨大经济损失的气象灾害。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '地震灾害',
                        subName: '特别重大气象灾害包括',
                        desc: [
                            '1: 造成３００人以上死亡，直接经济损失占全省上年地区生产总值１％以上的地震。',
                            '2: 发生在人口较密集地区７级以上地震。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '地质灾害',
                        subName: '特别重大地质灾害包括',
                        desc: [
                            '1: 因山体崩塌、滑坡、泥石流、地面塌陷、地裂缝等灾害造成３０人以上死亡，或直接经济损失１０００万元以上的地质灾害。',
                            '2: 受地质灾害威胁，需转移人数在１０００人以上，或潜在可能造成的经济损失在１亿元以上的灾害险情。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '海洋灾害',
                        subName: '特别重大海洋灾害包括',
                        desc: [
                            '1: 风暴潮、巨浪、海啸、赤潮等造成３０人以上死亡，或５０００万元以上经济损失的海洋灾害。',
                            '2: 对沿海重要城市或５０平方公里以上较大区域经济、社会和群众生产、生活等造成特别严重影响的海洋灾害。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '生物灾害',
                        subName: '特别重大生物灾害包括',
                        desc: [
                            '1: 在包括我省在内的２个以上省（市）病虫草等有害生物暴发流行，或新传入我国的有害生物在包括我省在内的２个以上省（市）内发生，或在省内２个以上市发生，对农业和林业造成巨大危害的生物灾害。',
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '森林火灾',
                        subName: '特别重大森林火灾包括',
                        desc: [
                            '1: 受害森林面积超过１０００公顷、火场仍未得到有效控制的火灾。',
                            '2: 造成３０人以上死亡或造成重大影响和财产损失的森林火灾。',
                        ]
                    },
                ],
            },
            {
                kind: '事故灾难类',
                disaster: [
                    {
                        goDetail: this.goDetail,
                        name: '安全事故',
                        subName: '特别重大安全事故包括',
                        desc: [
                            '1: 造成３０人以上死亡（含失踪），或危及３０人以上生命安全，或１亿元以上直接经济损失，或１００人以上中毒（重伤），或需要紧急转移安置１０万人以上的安全事故。',
                            '2: 铁路繁忙干线、国家高速公路网线路遭受破坏，造成行车中断，经抢修４８小时内无法恢复通车。',
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '特别重大环境污染和生态破坏事故',
                        subName: '特别重大安全事故包括',
                        desc: [
                            '1: 因环境污染造成重要城市主要水源地取水中断的污染事故。',
                            '2: 因危险化学品（含剧毒品）生产和贮运中发生泄漏，严重影响人民群众生产、生活和生态环境的污染事故。'
                        ]
                    },
                ]
            },
            {
                kind: '公共卫生事件类',
                disaster: [
                    {
                        goDetail: this.goDetail,
                        name: '公共卫生事件',
                        subName: '特别重大公共卫生事件',
                        desc: [
                            '1: 发生传染性非典型肺炎、人感染高致病性禽流感病例，疫情有扩散趋势。',
                            '2: 涉及包括我省在内的多个省份的群体性不明原因疾病，并有扩散趋势。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '动物疫情',
                        subName: '特别重大动物疫情',
                        desc: [
                            '1: 高致病性禽流感在２１日内，相邻省（市）有１０个以上县（市、区）发生疫情；或在我省２０个以上县（市、区）发生或１０个以上县（市、区）连片发生疫情。',
                            '2: 口蹄疫在１４日内，包括我省在内的５个以上省份发生严重疫情，且疫区连片。'
                        ]
                    },
                ],
            },
            {
                kind: '社会安全事件类',
                disaster: [
                    {
                        goDetail: this.goDetail,
                        name: '群体性事件',
                        subName: '特别重大群体性事件',
                        desc: [
                            '1: 一次参与人数５０００人以上，严重影响社会稳定的事件。',
                            '2: 冲击、围攻县级以上党政军机关和要害部门，打、砸、抢、烧乡镇以上党政军机关的事件。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '涉外突发事件',
                        subName: '特别重大群体性事件',
                        desc: [
                            '1: 一次造成３０人以上死亡或１００人以上伤亡的境外涉及我省或省内涉外事件。',
                            '2: 造成我省驻外的机构和人员安全及财产重大损失，造成外国驻我省机构和人员安全及重大财产损失，并具有重大政治和社会影响的涉外事件。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '恐怖袭击事件',
                        subName: '特别重大群体性事件',
                        desc: [
                            '1: 利用生物战剂、化学毒剂进行大规模袭击或攻击生产、贮存、运输生化毒物设施、工具的。',
                            '2: 利用核爆炸、核辐射进行袭击或攻击核设施、核材料装运工具的。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '刑事案件',
                        subName: '特别重大刑事案件',
                        desc: [
                            '1: 一次造成１０人以上死亡的杀人、爆炸、纵火、毒气、投放危险物质和邮寄危险物品等案件，或在公共场所造成６人以上死亡的案件，或采取绑架、劫持人质等手段，造成恶劣社会影响或可能造成严重后果的案件。',
                            '2: 抢劫金融机构或运钞车，盗窃金融机构现金１００万元以上的案件。'
                        ]
                    },
                ]
            },
            {
                kind: '经济安全事件类',
                disaster: [
                    {
                        goDetail: this.goDetail,
                        name: '金融突发事件',
                        subName: '特别重大金融突发事件',
                        desc: [
                            '1: 在我省发生的具有全国性影响的金融（含证券、期货）突发事件。',
                            '2: 金融行业已出现或将要出现连锁反应，需要各有关部门协同配合共同处置的金融突发事件。'
                        ]
                    },
                    {
                        goDetail: this.goDetail,
                        name: '影响市场稳定的突发事件',
                        subName: '特别重大突发事件',
                        desc: [
                            '1: 在２个以上市发生重要生活必需品市场异常波动，供应短缺。',
                            '2: 在相邻省（市）的相邻区域有２个以上市发生重要生活必需品市场异常波动，供应短缺。'
                        ]
                    },
                ],
            }
        ];
        this.currentPage = this.pageTypeEnum.List;
    }

    goDetail = (name) => {
        this.selIndicator = this.indicator.find((item) => {
            return item.disasterName === name;
        });
        this.currentPage = this.pageTypeEnum.DetailOrExamine;
    }

    async getEarthquakeWarningList() {
        await this.dataService.getCitiesNameList().subscribe(res => {
            this.dataInfo = res;
            res.forEach(item => {
                this.provinceData.push({value: item.id, label: item.cityName});
            });
        });
    }

    changeProvince(eve) {
        this.cityData = [];
        this.selected.city = '';
        this.dataInfo.find(data => data.id === eve).countDTOS.forEach(item => {
            this.cityData.push({value: item.id, label: item.countName});
        });
    }

    ngOnInit(): void {
        this.getEarthquakeWarningList();
    }

}