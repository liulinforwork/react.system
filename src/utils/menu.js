module.exports = [
  {
    id: 1,
    icon: 'laptop',
    name: '首页',
    router: '/dashboard',
  },
  {
    id: 2,
    bpid: 1,
    name: '账号管理',
    icon: 'api',
    router: '/request',
  },
  {
    id: 3,
    bpid: 1,
    name: '人员管理',
    icon: 'user',
    router: '/user',
  },
  // {
  //   id: 21,
  //   bpid: 2,
  //   mpid: 2,
  //   name: '人员管理',
  //   // icon: 'user',
  //   router: '/user/manage'
  // },
  // {
  //   id: 22,
  //   mpid: 2,
  //   bpid:2,
  //   name: '离职人员项目',
  //   router: '/user/quit'
  // },

  {
    id:4,
    bpid: 1,
    name: '我的账单',
    icon: 'setting',
    router: '/account',
  },
  {
    id:7,
    bpid: 1,
    name: '快捷语管理',
    icon: 'area-chart',
    router: '/quick',
  },

  {
    id:8,
    bpid: 1,
    name: '项目管理',
    icon: 'setting',
  },
  {
    id:81,
    bpid: 8,
    mpid: 8,
    name: '项目列表',
    router: '/house/list',
  },
  {
    id:82,
    bpid: 8,
    mpid: 8,
    name: '项目审核',
    router: '/house/review',
  },
  {
    id:83,
    bpid: 8,
    mpid: 8,
    name: '项目公开',
    router: '/house/open',
  },

  // {
  //   id:9,
  //   bpid: 1,
  //   name: '统计图表',
  //   icon: 'api',
  // },
  // {
  //   id:91,
  //   bpid: 19,
  //   mpid: 9,
  //   name: '柱状图',
  // },
  // {
  //   id:92,
  //   bpid: 9,
  //   mpid: 9,
  //   name: '饼状图',
  // },
  // {
  //   id:93,
  //   bpid: 9,
  //   mpid: 9,
  //   name: '折线图',
  //
  // },
  //
  // {
  //   id:10,
  //   bpid: 1,
  //   name: '系统设置',
  //   icon: 'setting',
  // },
  // {
  //   id:101,
  //   bpid: 10,
  //   mpid: 10,
  //   name: '全局设置',
  // },
  // {
  //   id:102,
  //   bpid: 10,
  //   mpid: 10,
  //   name: '个人设置',
  // },

]


