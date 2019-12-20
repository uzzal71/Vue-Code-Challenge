<template>
<div class="employee-list">
  <h3>
    Employee List
    <router-link :to="{ name: 'New' }" class="btn btn-primary float-right">New</router-link>
  </h3><hr/>
  <table class="table table-bordered">
    <tr>
      <th>#</th>
      <th>Employee name</th>
      <th>Employee Salary</th>
      <th>Employee Age</th>
      <th>Action</th>
    </tr>
    <tr v-for="employee in employeeList" :key="employee.id">
      <td>{{employee.id}}</td>
      <td>{{employee.employee_name}}</td>
      <td>{{employee.employee_salary}}</td>
      <td>{{employee.employee_age}}</td>
      <td>
        <router-link :to="{ name: 'View', params: { id: employee.id } }" class="btn btn-primary btn-sm" role="links">View</router-link>
        <router-link :to="{ name: 'Edit', params: { id: employee.id } }" class="btn btn-warning btn-sm" role="links">Edit</router-link>
        <button class="btn btn-danger btn-sm" @click="showModal = true; employeeId = employee.id">Delete</button>
      </td>
    </tr>
  </table>
  <!-- MODEL -->
    <transition name="modal" v-if="showModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>Employee Delete Confirmation!</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              Are You Sure This Employee?
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-primary" @click="deleteEmployee(employeeId)">
                Yes, delete this item!
              </button>
              <button class="btn btn-danger" @click="showModal = false">
                Cancel
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    this.$store.dispatch('fetchEmployee')
  },
  computed: mapState([
    'employeeList'
  ]),
  methods: {
    deleteEmployee (employeeId) {
      this.$store.dispatch('deleteEmployee', employeeId)
      this.showModal = false
    }
  }
}

</script>

<style scoped>
.employee-list {
  margin-top: 20px;
  background: #ffffff;
  padding: 15px;
  box-shadow: 2px 2px 20px gainsboro;
}

/* model */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #324ea8;
  font-size: 18px;
}

.modal-body {
  margin: 20px 0;
  color: red;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
