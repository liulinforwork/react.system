import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/dashboard'))
          cb(null, { component: require('./routes/dashboard/') })
        }, 'dashboard')
      },
      childRoutes: [
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/dashboard'));
              cb(null, require('./routes/dashboard/'));
            }, 'dashboard')
          },
        },

        // {
        //   path: 'user/manage',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       registerModel(app, require('./models/user'))
        //       cb(null, require('./routes/user/manage/'))
        //     }, 'user')
        //   },
        // },
        //
        // {
        //   path: 'user/quit',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       registerModel(app, require('./models/user'))
        //       cb(null, require('./routes/user/quit/'))
        //     }, 'user')
        //   },
        // },

        //监理
        {
          path: 'supervisor',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/login'))
              cb(null, require('./routes/supervisor/'))
            }, 'login')
          },
        },

        // {
        //   path: 'user/:id',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       registerModel(app, require('./models/user/detail'))
        //       cb(null, require('./routes/user/detail/'))
        //     }, 'user-detail')
        //   },
        // },
        //商品房
        // {
        //   path: 'house',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       registerModel(app, require('./models/login'))
        //       cb(null, require('./routes/house/'))
        //     }, 'login')
        //   },
        // },

        // //商品房创建
        // {
        //   path: 'house/create',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       // registerModel(app, require('./models/login'))
        //       cb(null, require('./routes/house/create'))
        //     }, 'login')
        //   },
        // },
        //
        // //商品房审核
        // {
        //   path: 'house/review',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       // registerModel(app, require('./models/login'))
        //       cb(null, require('./routes/house/review'))
        //     }, 'login')
        //   },
        // },
        // //商品房详情
        // {
        //   path: 'house/detail',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       // registerModel(app, require('./models/login'))
        //       cb(null, require('./routes/house/detail'))
        //     }, 'login')
        //   },
        // },
        // //商品房详情
        // {
        //   path: 'house/open',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       // registerModel(app, require('./models/login'))
        //       cb(null, require('./routes/house/open'))
        //     }, 'login')
        //   },
        // },

        //快捷语管理
        {
          path: 'quick',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/quick'));
              cb(null, require('./routes/quick'))
            }, 'login')
          },
        },
        //账户管理管理
        {
          path: 'request',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/request'));
              cb(null, require('./routes/request/'))
            }, 'request')
          },
        },

        {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/login'))
              cb(null, require('./routes/login/'))
            }, 'login')
          },
        },

        // {
        //   path: 'UIElement/iconfont',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/UIElement/iconfont/'))
        //     }, 'UIElement-iconfont')
        //   },
        // },
        // {
        //   path: 'UIElement/search',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/UIElement/search/'))
        //     }, 'UIElement-search')
        //   },
        // },
        // {
        //   path: 'UIElement/dropOption',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/UIElement/dropOption/'))
        //     }, 'UIElement-dropOption')
        //   },
        // },
        // {
        //   path: 'UIElement/layer',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/UIElement/layer/'))
        //     }, 'UIElement-layer')
        //   },
        // },
        // {
        //   path: 'UIElement/dataTable',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/UIElement/dataTable/'))
        //     }, 'UIElement-dataTable')
        //   },
        // },
        // {
        //   path: 'UIElement/editor',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/UIElement/editor/'))
        //     }, 'UIElement-editor')
        //   },
        // },
        // {
        //   path: 'chart/lineChart',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/chart/lineChart/'))
        //     }, 'chart-lineChart')
        //   },
        // },
        // {
        //   path: 'chart/barChart',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/chart/barChart/'))
        //     }, 'chart-barChart')
        //   },
        // },
        // {
        //   path: 'chart/areaChart',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('./routes/chart/areaChart/'))
        //     }, 'chart-areaChart')
        //   },
        // },
        {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]
  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
