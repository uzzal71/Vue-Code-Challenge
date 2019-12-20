<template>
<div class="employeeNew">
  <h3>
    Employee Update
    <router-link :to="{ name: 'List' }" class="btn btn-primary float-right">List</router-link>
  </h3><hr/>
  <form @submit.prevent="updateEmployee" autocomplete="off">

  <div class="form-group row">
    <label for="employee_name" class="col-sm-2 col-form-label">Employee Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="employee.employee_name" placeholder="Name">
    </div>
  </div>

  <div class="form-group row">
    <label for="employee_salary" class="col-sm-2 col-form-label">Employee Salary</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" v-model="employee.employee_salary" placeholder="Salary">
    </div>
  </div>

  <div class="form-group row">
    <label for="employee_age" class="col-sm-2 col-form-label">Employee Age</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" v-model="employee.employee_age" placeholder="Age">
    </div>
  </div>

  <div class="form-group row">
    <label for="" class="col-sm-2 col-form-label">&nbsp;</label>
    <div class="col-sm-10">
      <input type="submit" class="btn btn-primary" value="Update">
      <router-link :to="{ name: 'List' }" class="btn btn-danger" role="links">Cancel</router-link>
    </div>
  </div>

</form>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      employeeID: this.$route.params.id
    }
  },
  mounted () {
    let payload = this.$route.params.id
    this.$store.dispatch('getSingleEmployee', payload)
  },
  computed: mapState([
    'employee'
  ]),
  methods: {
    updateEmployee () {
      this.$store.dispatch('updateEmployee', this.employeeID)
    }
  }
}
</script>

<style scoped>
.employeeNew {
  margin-top: 20px;
  background: #ffffff;
  padding: 15px;
  box-shadow: 2px 2px 20px gainsboro;
}
</style>
