import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import cheliangweizhi from '@/views/modules/cheliangweizhi/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gongjiaoche from '@/views/modules/gongjiaoche/list'
    import gongjiaoxianlu from '@/views/modules/gongjiaoxianlu/list'
    import news from '@/views/modules/news/list'
    import paiban from '@/views/modules/paiban/list'
    import siji from '@/views/modules/siji/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryGongjiaoche from '@/views/modules/dictionaryGongjiaoche/list'
    import dictionaryGongjiaoxianlu from '@/views/modules/dictionaryGongjiaoxianlu/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryGongjiaoche',
        name: '车辆类型',
        component: dictionaryGongjiaoche
    }
    ,{
        path: '/dictionaryGongjiaoxianlu',
        name: '线路类型',
        component: dictionaryGongjiaoxianlu
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }


    ,{
        path: '/cheliangweizhi',
        name: '位置信息',
        component: cheliangweizhi
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/gongjiaoche',
        name: '车辆信息',
        component: gongjiaoche
      }
    ,{
        path: '/gongjiaoxianlu',
        name: '公交线路',
        component: gongjiaoxianlu
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/paiban',
        name: '排班信息',
        component: paiban
      }
    ,{
        path: '/siji',
        name: '司机',
        component: siji
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
