<template>
  <div class="text-center">
    <h3>All Projects</h3>
    <div class="table-responsive mt-3">
      <div class="offset-sm-3 offset-md-3 offset-xs-4 offset-lg-2 col-9">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Project ID</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in result" :key="index">
              <td>{{ item.ProjectId }}</td>
              <td>{{ item.ProjectName }}</td>
              <td>{{ item.ProjectCode }}</td>
              <td>{{ item.Comment }}</td>
            </tr>
          </tbody>
        </table>
        <input
          type="button"
          value="Go Back"
          class="btn btn-primary"
          style="margin-right:50px"
          id="backId"
          @click="ReturnToPreviousPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      result: null
    };
  },
  methods: {
    ReturnToPreviousPage() {
      this.$router.replace({ name: "AddProject" });
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/projects/getallprojects`)
      .then(response => {
        this.result = response.data.projects;
        // eslint-disable-next-line no-console
        console.log(this.result);
      });
  },
  name: "AllProjects"
};
</script>
<style scoped>
#backId {
  background: #2a577d !important;
  border: #2a577d;
}
</style>
