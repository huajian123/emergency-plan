/*****
 开发环境配置
 开发构建命令(以下命令等效)：
 ng build --target=development --environment=dev
 ng build --dev --e=dev
 ng build --dev
 ng build
 ****/
const isIusUsedMock = false;

// todo localUrl配置本机地址
export const localUrl = 'http://localhost:4200';
export const webServerUrl = `${localUrl}/site`;
const mockServerUrl = `${localUrl}/site-model`;

export const gatewayKey = {
  Ius: 'ius',
  /**
   * 基础服务
   */
  Bs: 'bs',
  /**
   * mock服务
   */
  Mock: 'mock'
};

// 老吴才给
/*companyPositon: {
  cenL: 118.30612,
    cenB: 34.29057
},*/

/*companyPositon: {
  cenL: 120.676173,
    cenB: 31.21611
},*/

// 六合
/*companyPositon: {
  cenL: 118.912782,
    cenB: 32.187244
},*/

export const environment = {
  sysName: '江苏省突发事件应对处置数字化系统',
  sysNamePinYin: 'tufashijianyingduichuzhi',
 /* get sysName() {
    return   '安环应急一体化管理平台' ;
  },*/
  // 厂区坐标
  companyPositon: {
    cenL: 118.30612,
    cenB: 34.29057
  },
  production: false,
  baseUrl: {
    ius: `${isIusUsedMock ? mockServerUrl : webServerUrl + '/ius'}`,
    bs: `${webServerUrl}/gh`,
    mock: mockServerUrl
  },
  otherData: {
    sysRole: 0,
    sysSite: '0',
    defaultPath: '/',
    fileServiceUrl: `${webServerUrl}/image`,    // 文件服务器
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
