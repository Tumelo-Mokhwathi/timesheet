<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center h-100">
      <div class="user_card">
        <h3 class="text-center mb-1">Timesheet Sign In</h3>
        <div class="d-flex justify-content-center">
          <form>
            <hr />
            <div class="input-group mb-4">
              <div class="input-group-append">
                <span class="input-group-text"
                  ><i class="fas fa-user"></i
                ></span>
              </div>
              <input
                type="text"
                name="username"
                class="form-control input_user"
                placeholder="username"
                v-model="username"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input
                type="password"
                name="password"
                class="form-control input_pass"
                placeholder="password"
                v-model="password"
              />
            </div>
            <div class="d-flex justify-content-center mt-4 login_container">
              <input
                type="button"
                value="Login"
                class="btn btn-primary"
                id="login"
                @click="SignIn"
                :disabled="disableButton"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import database from "@/firebase/database";
export default {
  computed: {
    disableButton() {
      return this.username === "" || this.password === "";
    }
  },
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    async SignIn() {
      const result = await database.signIn(this.username, this.password);
      this.$router.replace({
        name: "Dashboard"
      });

      if (result.message) {
        this.error = result.message;
      }
      // eslint-disable-next-line no-console
      console.log("User succesfully logged in");
    }
  },
  mounted() {}
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style scoped>
.container {
  margin-top: 15%;
}
.user_card {
  height: 320px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
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
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #2a577d !important;
}
</style>
