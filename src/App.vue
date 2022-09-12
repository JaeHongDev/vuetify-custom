<template>
  <v-app class="app">
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
});
</script>

<style scoped lang="scss">
.v-application {
  font-family: SUIT, serif;
}
.app {
  background-image: url("~@/assets/login_bg.png");
}
</style>
