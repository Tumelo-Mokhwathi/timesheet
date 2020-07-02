<template>
  <div class="container">
    <div class="row">
      <div class="offset-sm-3 offset-md-3 offset-xs-6 offset-lg-2 w-75">
        <div class="d-flex justify-content-center">
          <div class="user_card">
            <h3 class="text-center mb-4">Add Project</h3>
            <div class="form-group">
              <label for="projectName">Project Name:</label>
              <input
                type="text"
                class="form-control"
                id="projectName"
                v-model="projectName"
              />
            </div>
            <div class="form-group">
              <label for="projectCode">Project Code:</label>
              <input
                type="text"
                class="form-control"
                id="projectCode"
                v-model="projectCode"
              />
            </div>
            <div class="form-group">
              <label for="projectComment">Comment:</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Add your comment"
                id="projectComment"
                v-model="projectComment"
              />
            </div>
            <div class="form-group mt-2">
              <input
                type="button"
                value="Save"
                class="btn btn-primary mr-3"
                id="login"
                @click="SaveProject"
              />
              <input
                type="button"
                value="Cancel"
                class="btn btn-primary mr-3"
                id="login"
                @click="CancelText"
              />
              <input
                type="button"
                value="All Projects"
                class="btn btn-primary"
                id="login"
                @click="AllProject"
              />
            </div>
            <div class="alert alert-success text-center" v-if="sendSuccesfully">
              {{ createdMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      projectName: "",
      projectCode: "",
      projectComment: "",
      result: null,
      createdMessage: "Project has been created successfully",
      sendSuccesfully: false
    };
  },
  methods: {
    AllProject() {
      this.$router.replace({
        name: "AllProjects"
      });
    },
    CancelText() {
      (this.projectName = ""),
        (this.projectCode = ""),
        (this.projectComment = ""),
         (this.sendSuccesfully = false)
    },
    ClearText() {
      (this.projectName = ""),
        (this.projectCode = ""),
        (this.projectComment = "")
    },
    SaveProject() {
      axios
        .post(`${process.env.VUE_APP_ROOT_API}/projects/addproject`, {
          ProjectName: this.projectName,
          ProjectCode: this.projectCode,
          Comment: this.projectComment
        })
        .then(response => {
          this.result = response.data.projects;
          // eslint-disable-next-line no-console
          console.log("Project created succesfuly");         
        });
      this.ClearText();
      this.sendSuccesfully = true;
    }
  },
  name: "AddProject"
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style scoped>
.container {
  margin-top: 10%;
}
.user_card {
  height: auto;
  width: 500px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0;
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.form_container {
  margin-top: 100px;
}
#login {
  width: 30%;
  background: #2a577d !important;
  color: white !important;
  border: #2a577d;
}
#login {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #2a577d !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked .custom-control-label::before {
  background-color: #2a577d !important;
}
</style>
