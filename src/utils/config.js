module.exports = {
  name: '监理宝',
  prefix: 'antdAdmin',
  footerText: '四川马丁洛克网络科技  © 2017 四川成都',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  // baseURL: 'http://localhost:8001/api/v1',
  baseURL: 'http://test.supervision.com',
  baseURL_pay: 'http://test.appserver.com',
  // baseURL: 'https://appserver.madrock.com.cn/',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://localhost:7000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  version:"1.0.0",
  api: {

    // 公共请求
    phoneCaptcha: 'common/phoneCaptcha',/*发送手机验证码*/
    userLogin: '/login',/*登录系统*/
    userLogout: '/logout',/*登出系统*/
    userInfo: '/userInfo',/*用户相关信息*/
    users: '/users',/*用户相关信息*/
    user: '/user/:id',/*用户相关信息*/

    // 账号管理
    listPage: '/userBase/load/listPage',/*账号列表*/
    binding: '/userBase/binding',/*绑定账号和电脑*/
    delUser: '/userBase/delUser',/*删除账号*/
    createUser: '/userBase/createUser',/*新增账号*/

    // 人员管理
    electEmployee: '/employee/selectEmployee',/*雇员列表*/
    setDimission: '/employee/setDimission',/*置为离职*/
    selectByPDId: '/employee/selectByPDId',/*查询雇员列表*/
    setEmployeePart: '/employee/setEmployeePart',/*雇员分配*/
    addPart: '/employee/setEmployeePart',/*添加雇员标签*/
    delPart: '/employee/delPart',/*删除雇员标签*/
    getPartList: '/employee/getPartList',/*查询雇员标签*/
    updatePart: '/employee/updatePart',/*修改雇员标签*/

    // 账单管理
    balanceList: '/api/supervision/balance/list',/*监理宝账单列表*/
    balancePay: '/api/alipay/pay',/*支付*/

    // 快捷语管理
    addShortcutWords: '/project/addShortcutWords',/*添加快捷语*/
    upShortcutWords: '/project/upShortcutWords',/*编辑快捷语*/
    delShortcutWords: '/project/delShortcutWords',/*删除快捷语*/
    viewShortcutWords: '/project/viewShortcutWords',/*快捷语分页列表*/

    // 项目管理
    viewProject: '/project/viewProject',/*查询项目列表*/
    createProject: '/project/createProject',/*添加项目*/
    setOffLine: '/project/setOffLine',/*设置项目下线*/
    viewProjectDetail: '/project/viewProjectDetail',/*查询项目详情*/
    viewDynamicByGroup: '/project/viewDynamicByGroup',/*通过用户组查询项目动态（用于审核项目动态）*/
    viewDynamicById: '/project/viewDynamicById',/*通过项目ID查询项目动态（用于查看项目详情）*/
    viewPublicRequest: '/project/viewPublicRequest',/*查看公开请求*/
    agreePublic: '/project/agreePublic',/*同意公开请求*/
    updateDynamicPublishMany: '/project/updateDynamicPublishMany',/*批量审核项目动态照片*/
    updateDynamicPublishSigle: '/project/updateDynamicPublishSigle',/*单个审核项目动态照片*/
    delComment: '/project/delComment',/*删除评论*/
    viewProjectByUserId: '/project/viewProjectByUserId',/*查看离职人员项目*/
    setOffline: '/project/setOffline',/*设置项目为下线*/
    addEmployeeToProject: '/project/addEmployeeToProject',/*新增雇员到项目中*/
    setOver: '/project/setOver',/*设置项目为完工*/
    modifyEmployeeFromProject: '/project/modifyEmployeeFromProject',/*修改项目成员*/

  },
}
