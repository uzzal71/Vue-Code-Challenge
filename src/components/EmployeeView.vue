<template>
<div class="employeeDetail">
  <h3>
    Employee Detail
    <router-link :to="{ name: 'List' }" class="btn btn-primary float-right">List</router-link>
  </h3><hr/>
  <table class="table table-bordered">
    <tr>
      <td>Employee Id</td>
      <td>{{employee.id}}</td>
    </tr>
    <tr>
      <td>Employee Name</td>
      <td>{{employee.employee_name}}</td>
    </tr>
    <tr>
      <td>Employee Salary</td>
      <td>{{employee.employee_salary}}</td>
    </tr>
    <tr>
      <td>Employee Age</td>
      <td>{{employee.employee_age}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted () {
    let payload = this.$route.params.id
    this.$store.dispatch('getSingleEmployee', payload)
  },
  computed: mapState([
    'employee'
  ])
}

</script>

<style scoped>
.employeeDetail {
  margin-top: 20px;
  background: #ffffff;
  padding: 15px;
  box-shadow: 2px 2px 20px gainsboro;
}
</style>
