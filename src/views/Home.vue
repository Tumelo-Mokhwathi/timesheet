<template>
  <div class="text-center"><h3>Home</h3></div>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style>
header {
  height: 60px;
}

#home {
  width: 100%;
  height: 100%;
}

nav {
  background-color: #2a577d;
}
/* data table */
.custom-select {
  background: none;
  padding: 0;
}
.vfl-label-on-focus {
  color: var(--primary) !important;
}
.tooltip {
  z-index: 50 !important;
}

.sidenav {
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #dcdcdc;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 35px;
  border: #2a577d;
}

.sidenav a {
  padding: 10px 8px 6px 8px;
  text-decoration: none;
  font-size: 15px;
  color: #2a577d;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}
#btn {
  color: #f1f1f1;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
