import Vue from 'vue'
import Router from 'vue-router'
import EmployeeList from '@/components/EmployeeList'
import EmployeeView from '@/components/EmployeeView'
import EmployeeEdit from '@/components/EmployeeEdit'
import EmployeeNew from '@/components/EmployeeNew'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: EmployeeList
    },
    {
      path: '/view/:id',
      name: 'View',
      component: EmployeeView
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: EmployeeEdit
    },
    {
      path: '/new',
      name: 'New',
      component: EmployeeNew
    }
  ]
})
