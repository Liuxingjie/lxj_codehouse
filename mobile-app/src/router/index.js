import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component(resolve) {
        require(['@/components/primary/home'], (resolve))
      },
      children: [
        {
          path: '/',
          name: 'home2',
          component(resolve) {
            require(['@/components/primary/home2'], (resolve))
          }
        },
        {
          path: '/community',
          name: 'mine',
          component(resolve) {
            require(['@/components/primary/mine'], (resolve))
          }
        },
        {
          path: '/life',
          name: 'life',
          component(resolve) {
            require(['@/components/primary/life'], (resolve))
          }
        },
        {
          path: '/myService',
          name: 'health',
          component(resolve) {
            require(['@/components/primary/health'], (resolve))
          }
        }
      ]
    },

    //  第二页显示 
    {
      path: '/service',
      name: 'service',
      component(resolve) {
        require(['@/components/common/service'], (resolve))
      }
    },
    {
      path: '/health',
      name: 'safeHealth',
      component(resolve) {
        require(['@/components/common/health'], (resolve))
      }
    },
    {
      path: '/expertTeam',
      name: 'expertTeam',
      component(resolve) {
        require(['@/components/common/expertTeam'], (resolve))
      }
    },
    {
      path: '/healthMeans',
      name: 'healthMeans',
      component(resolve) {
        require(['@/components/common/healthMeans'], (resolve))
      }
    },
    {
      path: '/product',
      name: 'product',
      component(resolve) {
        require(['@/components/common/product'], (resolve))
      }
    },
    {
      path: '/design',
      name: 'design',
      component(resolve) {
        require(['@/components/common/design'], (resolve))
      }
    },
    {
      path: '/about',
      name: 'about',
      component(resolve) {
        require(['@/components/common/about'], (resolve))
      }
    },


    //smallComponents     第三页
    {
      path: '/versionMessage',
      name: 'versionMessage',
      component(resolve) {
        require(['@/components/smallComponents/versionMessage'], (resolve))
      }
    },
    {
      path: '/feedback',
      name: 'feedback',
      component(resolve) {
        require(['@/components/smallComponents/feedback'], (resolve))
      }
    },
    {
      path: '/share',
      name: 'share',
      component(resolve) {
        require(['@/components/smallComponents/share'], (resolve))
      }
    },
    {
      path: '/service2',
      name: 'service2',
      component(resolve) {
        require(['@/components/smallComponents/service2'], (resolve))
      }
    },
    {
      path: '/healthMeans2',
      name: 'healthMeans2',
      component(resolve) {
        require(['@/components/smallComponents/healthMeans2'], (resolve))
      }
    },
    {
      path: '/product2',
      name: 'product2',
      component(resolve) {
        require(['@/components/smallComponents/product2'], (resolve))
      }
    },
    {
      path: '/laohuajing',
      name: 'product2',
      component(resolve) {
        require(['@/components/smallComponents/laohuajing'], (resolve))
      }
    },
    {
      path: '/zhutingqi',
      name: 'zhutingqi',
      component(resolve) {
        require(['@/components/smallComponents/zhutingqi'], (resolve))
      }
    },
    {
      path: '/anshenzhen',
      name: 'anshenzhen',
      component(resolve) {
        require(['@/components/smallComponents/anshenzhen'], (resolve))
      }
    },
    {
      path: '/xuetangyi',
      name: 'xuetangyi',
      component(resolve) {
        require(['@/components/smallComponents/xuetangyi'], (resolve))
      }
    }


  ]
})
