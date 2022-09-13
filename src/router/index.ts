import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: LoginPage,
  },
  /**
   * 전체 로그인
   * */
  {
    path: "/auth",
    name: "loginPage",
    component: LoginPage,
  },
  /**
   * 관리자 페이지 (기업별 로그인)
   * */
  {
    path: "/:abbreviation/auth",
    name: "abbreviation-auth",
  },
  /**
   * 발신번호 관리
   * */
  {
    path: "/:abbreviation/admin/manage-caller-id",
    name: "abbreviation-auth-admin-manage-caller-id",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
