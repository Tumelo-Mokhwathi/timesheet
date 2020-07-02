<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark py-1 fixed-top">
      <div class="navbar-brand">
        <div>Timesheet</div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler" v-bind:class="{ in: show }">
        <ul class="navbar-nav ml-auto" v-if="authenticated">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Hi {{ Username }}
              <i class="fas fa-user"></i>
            </a>
          </li>
          <li class="nav-item">
            <b-nav-item-dropdown text="Menu">
              <b-dropdown-item class="itemList">
                <a class="dropdown-item" href="#" @click="Logout">Logout</a>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  },
  name: "Navbar",
  props: {
    Username: {
      required: false,
      type: String
    },
    authenticated: {
      required: false,
      type: String
    }
  },
  methods: {
    Logout() {
      this.$emit("Logout");
    },
    toggleNavbar() {
      this.show = !this.show;
    }
  }
};
</script>
<style>
.dropdown-menu {
  top: 110%;
  left: -77px;
}
</style>
