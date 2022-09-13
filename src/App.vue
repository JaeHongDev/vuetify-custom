<template>
  <v-app class="app">
    <!-- login layout -->
    <div></div>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { useAuthStore } from "@/store";
export default Vue.extend({
  name: "App",
  setup: () => {
    const store = useAuthStore();
    console.log(store);
  },
});
</script>

<style scoped lang="scss">
.v-application {
  font-family: SUIT, serif;
}
.app {
  background-image: url("~@/assets/login_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
