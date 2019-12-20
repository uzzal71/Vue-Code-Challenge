<template>
<div class="employeeNew">
  <h3>
    Employee Create
    <router-link :to="{ name: 'List' }" class="btn btn-primary float-right">List</router-link>
  </h3><hr/>
  <form @submit.prevent="addNewEmployee" autocomplete="off">

  <div class="form-group row">
    <label for="name" class="col-sm-2 col-form-label">Employee Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="employee.name" placeholder="Name">
    </div>
  </div>

  <div class="form-group row">
    <label for="salary" class="col-sm-2 col-form-label">Employee Salary</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" v-model="employee.salary" placeholder="Salary">
    </div>
  </div>

  <div class="form-group row">
    <label for="age" class="col-sm-2 col-form-label">Employee Age</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" v-model="employee.age" placeholder="Age">
    </div>
  </div>

  <div class="form-group row">
    <label for="age" class="col-sm-2 col-form-label">&nbsp;</label>
    <div class="col-sm-10">
      <input type="submit" class="btn btn-primary" value="Save">
       <router-link :to="{ name: 'List' }" class="btn btn-danger" role="links">Cancel</router-link>
    </div>
  </div>

</form>
</div>
</template>

<script>
export default {
  data () {
    return {
      employee: {
        'name': '',
        'salary': '',
        'age': ''
      }
    }
  },
  methods: {
    addNewEmployee () {
      this.$store.dispatch('addEmployee', JSON.stringify(this.$data.employee))
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
