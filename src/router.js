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

        // 人员管理
        {
          path: 'user',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/user'));
              cb(null, require('./routes/user'))
            }, 'user')
          },
        },


        //监理
        {
          path: 'account',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/account'))
              cb(null, require('./routes/account/'))
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
        // //商品房
        // {
        //   path: 'house',
        //   getComponent (nextState, cb) {
        //     require.ensure([], require => {
        //       registerModel(app, require('./models/login'))
        //       cb(null, require('./routes/house/'))
        //     }, 'login')
        //   },
        // },

        //项目列表
        {
          path: 'house/list',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/house'))
              cb(null, require('./routes/house/list'))
            }, 'login')
          },
        },

        //商品房审核
        {
          path: 'house/review',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/login'))
              cb(null, require('./routes/house/review'))
            }, 'login')
          },
        },
        //商品房详情
        {
          path: 'house/detail',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/login'))
              cb(null, require('./routes/house/detail'))
            }, 'login')
          },
        },
        //商品房详情
        {
          path: 'house/open',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/login'))
              cb(null, require('./routes/house/open'))
            }, 'login')
          },
        },

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
          path: 'chart/pieChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/chart/pieChart'))
            }, 'login')
          },
        },

        {
          path: 'chart/barChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/chart/barChart'))
            }, 'login')
          },
        },

        {
          path: 'chart/lineChart',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/chart/lineChart'))
            }, 'login')
          }
        },

        {
          path: 'video',
          getComponent (nextState, cb) {
            require.ensure( [
              '../public/ueditor/utf8-jsp/ueditor.config.js',
              '../public/ueditor/utf8-jsp/ueditor.all.js',
              // './routes/video/index.js'
              // './routes/video'
            ], require => {
              cb(null, require(
                // [
                //   '../public/ueditor/utf8-jsp/ueditor.config.js',
                //   '../public/ueditor/utf8-jsp/ueditor.all.js',
                //   './routes/video/index.js'
                //   // './routes/video'
                // ]
                './routes/video'
              ))
            }, 'video')
          },
        },

        {
          path: 'audio',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/audio'))
            }, 'audio')
          },
        },

        {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error/'))
            }, 'error')
          }
        }

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
