<template>
  <div class="container">
    <div class="row">
      <div class="offset-sm-3 offset-md-3 offset-xs-6 offset-lg-2 w-75">
        <div class="d-flex justify-content-center">
          <div class="user_card">
            <h3 class="text-center mb-4">Timesheet</h3>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="selectActivity">Select Project:</label>
                  <select class="form-control" id="selectProject" v-model="selectedProject">
                    <option disabled selected value>Select Project</option>
                    <option>Project 1</option>
                    <option>Project 2</option>
                    <option>Project 3</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="selectActivity">Select Activity:</label>
                  <select class="form-control" id="selectActivity" v-model="selectedActivity">
                    <option disabled selected value>Select Activity</option>
                    <option>Activity 1</option>
                    <option>Activity 2</option>
                    <option>Activity 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="fromTime">From time:</label>
                  <input type="time" class="form-control" id="fromTime" v-model="result.time.fromTime" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="toTime">To time:</label>
                  <input type="time" class="form-control" id="toTime" v-model="result.time.toTime" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="totalHours">Total Hours:</label>
                  <div id="totalHours">{{ totalHours }}</div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="createdDate">Date Booked:</label>
                  <div id="createdDate">{{ currentDate }}</div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="projectComment">Comment:</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Add your comment"
                id="projectComment"
                v-model="result.projectComment"
              />
            </div>
            <div class="row">
              <div class="col-4">
                <input
                  type="button"
                  value="Save"
                  class="btn btn-primary"
                  id="login"
                  @click="SaveTimesheet"
                />
              </div>
              <div class="col-4">
                <input
                  type="button"
                  value="Cancel"
                  class="btn btn-primary"
                  id="login"
                  @click="CancelText"
                />
              </div>
              <div class="col-4">
                <input
                  type="button"
                  value="View All"
                  class="btn btn-primary pl-3"
                  id="login"
                  @click="ListOfTimesheets"
                />
              </div>
            </div>
            <div class="row">
                <div class="col-12 mt-4">
                  <div class="alert alert-success text-center" v-if="sendSuccesfully">
                   {{ createdMessage }}
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const moment = require("moment");
export default {
  computed: {
    totalHours() {
      return (
        moment(this.result.date.toLocaleDateString() + " " + this.result.time.toTime).diff(
          moment(this.result.date.toLocaleDateString() + " " + this.result.time.fromTime),
          "minutes"
        ) / 60
      ).toFixed(2);
    },
    currentDate() {
      return moment(String(this.result.date)).format("MM/DD/YYYY hh:mm:ss")
    },
    calculateHours() {
      return this.totalHours + 0;
    }
  },
  data() {
    return {
      createdMessage: "Timesheet has been added successfully",
      sendSuccesfully: false,
      resultData: null,
      result: {
        date: new Date(),
        projectComment: "",
        time: {
          fromTime: "08:30",
          toTime: "17:30"
        }
      },
      selectedActivity: "",
      selectedProject: "",
      hoursData: null
    };
  },
  methods: {
    CancelText() {
       this.selectedProject = "";
       this.selectedActivity = "",
       this.result.projectComment = "";
       this.selected = undefined;
       this.result.time.fromTime = "";
       this.result.time.toTime = "";
       this.sendSuccesfully = false;
    },
    ClearText() {
       this.selectedProject = "";
       this.selectedActivity = "",
       this.result.projectComment = "";
       this.selected = undefined;
       this.result.time.fromTime = "";
       this.result.time.toTime = "";
    },
    ListOfTimesheets(){
      this.$router.replace({ name: "TimesheetLists" });
    },
    SaveTimesheet() {
      this.hoursData = this.totalHours;
      axios.post(`${process.env.VUE_APP_ROOT_API}/timesheets/addTimesheet`, {
          SelectedProject: this.selectedProject,
          SelectedActivity: this.selectedActivity,
          FromTime: this.result.time.fromTime,
          ToTime: this.result.time.toTime,
          TotalHours: this.calculateHours,
          DateBooked: this.currentDate,
          Comment: this.result.projectComment
      }).then(response => {
          this.resultData = response.data.timesheets;
          // eslint-disable-next-line no-console
          console.log("Timesheet created succesfuly");
        })
        this.ClearText();
        this.sendSuccesfully = true;
    },
  },
  name: "Timesheet"
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style scoped>
.container {
  margin-top: 2%;
}
.user_card {
  height: auto;
  width: 800px;
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
  width: 100%;
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

