import Vue from "vue";
import VueRouter from "vue-router";
import AddProject from "@/views/AddProject.vue";
import AllProjects from "@/views/AllProjects.vue";
import AssignRoles from "@/views/AssignRoles.vue";
import CreateAccount from "@/views/CreateAccount.vue";
import CreateUser from "@/views/CreateUser.vue";
import Timesheet from "@/views/Timesheet.vue";
import Dashboard from "@/views/Dashboard.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import TimesheetLists from "@/views/TimesheetLists.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/AddProject",
    name: "AddProject",
    component: AddProject,
    props: true
  },
  {
    path: "/AllProjects",
    name: "AllProjects",
    component: AllProjects,
    props: true
  },
  {
    path: "/AssignRoles",
    name: "AssignRoles",
    component: AssignRoles,
    props: true
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: CreateAccount,
    props: true
  },
  {
    path: "/CreateUser",
    name: "CreateUser",
    component: CreateUser,
    props: true
  },
  {
    path: "/Timesheet",
    name: "Timesheet",
    component: Timesheet,
    props: true
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    props: true
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: ResetPassword,
    props: true
  },
  {
    path: "/TimesheetLists",
    name: "TimesheetLists",
    component: TimesheetLists,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
