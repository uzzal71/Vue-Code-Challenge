import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router/index'

Vue.use(Vuex, router)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    employeeList: [],
    employee: {
      employee_name: '',
      employee_salary: '',
      employee_age: ''
    },
    showModal: false
  },
  getters: {

  },
  actions: {
    fetchEmployee ({commit}) {
      axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.data)
        .then(employees => {
          commit('updateEmployeeList', employees)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getSingleEmployee ({commit}, payload) {
      axios.get(`http://dummy.restapiexample.com/api/v1/employee/${payload}`)
        .then(response => response.data)
        .then(employee => {
          commit('setEmployee', employee)
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateEmployee ({state}, payload) {
      axios.put(`http://dummy.restapiexample.com/api/v1/update/${payload}`, {
        'name': state.employee.employee_name,
        'salary': state.employee.employee_salary,
        'age': state.employee.employee_age
      })
        .then(response => response.data)
        .then(employee => {
          console.log(employee)
          router.push({path: '/'})
        })
        .catch(error => {
          console.log(error)
        })
    },
    addEmployee ({dispatch}, payload) {
      axios.post('http://dummy.restapiexample.com/api/v1/create', payload)
        .then(response => response.data)
        .then(employee => {
          router.push({ path: '/' })
          console.log(employee)
          dispatch('fetchEmployee')
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteEmployee ({dispatch}, payload) {
      axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${payload}`)
        .then(response => response.data)
        .then(result => {
          // router.push({ path: '/' })
          console.log(result)
          dispatch('fetchEmployee')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mutations: {
    updateEmployeeList (state, employees) {
      state.employeeList = employees
    },
    setEmployee (state, employee) {
      state.employee = employee
    }
  }
})
