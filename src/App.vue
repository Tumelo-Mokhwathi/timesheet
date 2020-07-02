<template>
  <div id="app">
    <header>
      <navbar
        :Username="AuthenticatedUser"
        @Logout="Logout"
        :authenticated="AuthenticatedUser"
      />
    </header>
    <div class="sidenav" v-if="navigated">
      <router-link :to="{ name: 'Dashboard' }">
        <a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a>
      </router-link>
      <router-link :to="{ name: 'CreateUser' }" class="navbar-brand">
        <a href="#"><i class="fas fa-user-edit"></i> Create User</a>
      </router-link>
      <router-link :to="{ name: 'Timesheet' }" class="navbar-brand">
        <a href="#"><i class="fas fa-edit"></i> Timesheet</a>
      </router-link>
      <router-link :to="{ name: 'AddProject' }" class="navbar-brand">
        <a href="#"><i class="fas fa-user-tag"></i> Projects</a>
      </router-link>
      <router-link :to="{ name: 'ResetPassword' }" class="navbar-brand">
        <a href="#"><i class="fas fa-file-alt"></i> Reset Password</a>
      </router-link>
    </div>
    <router-view class="router-content" />
    <Footer :currentYear="currentYear" :version="version" />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import database from "@/firebase/database";
import { mapGetters } from "vuex";
export default {
  components: {
    Footer,
    Navbar
  },
  computed: {
    ...mapGetters({ AuthenticatedUser: "CurrentUser" }),
    navigated() {
      return (
        this.$route.path === "/AddProject" ||
        this.$route.path === "/AllProjects" ||
        this.$route.path === "/Timesheet" ||
        this.$route.path === "/AssignRoles" ||
        this.$route.path === "/CreateUser" ||
        this.$route.path === "/Dashboard" ||
        this.$route.path === "/Home" ||
        this.$route.path === "/ResetPassword" ||
        this.$route.path === "/TimesheetLists"
      );
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      version: process.env.VUE_APP_VERSION
    };
  },
  methods: {
    async Logout() {
      const result = await database.signOut();
      this.$router.replace({
        name: "Login"
      });

      if (result.message) {
        this.error = result.message;
      }
      // eslint-disable-next-line no-console
      console.log("User succesfully logged out");
    }
  },
  name: "app"
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style></style>
