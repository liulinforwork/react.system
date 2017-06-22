module.exports = {
  name: '监理宝',
  prefix: 'antdAdmin',
  footerText: '四川马丁洛克网络科技  © 2017 四川成都',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  // baseURL: 'http://localhost:8001/api/v1',
  baseURL: 'http://test.supervision.com',
  // baseURL: 'https://appserver.madrock.com.cn/',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://localhost:7000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  version:"1.0.0",
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userInfo: '/userInfo',
    users: '/users',
    user: '/user/:id',
    addShortcutWords: '/project/addShortcutWords',/*添加快捷语*/
    upShortcutWords: '/project/upShortcutWords',/*编辑快捷语*/
    delShortcutWords: '/project/delShortcutWords',/*删除快捷语*/
    viewShortcutWords: '/project/viewShortcutWords',/*快捷语分页列表*/
    // viewShortcutWords: '/activity/luckyWheel/carousel/view',/*幸运轮*/
  },
}
