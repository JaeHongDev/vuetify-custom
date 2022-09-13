<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <v-card-title>title</v-card-title>
        <v-card-text>
          <radio-button :data="data" @change:item="getConsonant"></radio-button>
        </v-card-text>
        <v-card-text>
          <v-select
            :items="company"
            outlined
            label="기업 및 대학 선택"
            item-text="name"
            item-value="abbreviation"
            dense
            :loading="findCompanyLoading"
          ></v-select>
          <v-text-field dense label="ID" v-model="user.id"></v-text-field>
          <v-text-field
            dense
            label="PW"
            v-model="user.password"
            type="password"
          ></v-text-field>
          <div class="fs-8">
            <span>서비스를 체험해보고 싶으신가요? </span>
            <v-btn>체험하기</v-btn>
          </div>
        </v-card-text>
        <v-card-text>
          <v-spacer></v-spacer>
          <v-btn
            class="light-navy-button"
            :loading="findUserLoading"
            @click="requestLogin"
            >로그인</v-btn
          >
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import AuthService from "@/data/auth";
import RadioButton from "@/components/Auth/Molecule/RadioButton.vue";

import Vue, { reactive, ref } from "vue";

export default Vue.extend({
  name: "LoginPage",
  components: {
    RadioButton,
  },
  setup: () => {
    const findCompanyLoading = ref(false);
    const findUserLoading = ref(false);
    const data = [
      "ㄱ",
      "ㄴ",
      "ㄷ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅅ",
      "ㅇ",
      "ㅈ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ];
    const company = ref([]);
    const user = reactive({
      id: "",
      password: "",
    });
    const setLoadingStart = () => (findCompanyLoading.value = true);
    const setLoadingEnd = () => (findCompanyLoading.value = false);

    const requestLogin = async () => {
      findUserLoading.value = true;
      const authService = new AuthService();
      authService.requestLogin(user);
      findUserLoading.value = false;
    };

    const getConsonant = async (consonant) => {
      setLoadingStart();
      const authService = new AuthService();
      company.value = await authService.getCompanyByConsonant(consonant);
      setLoadingEnd();
    };

    return {
      data,
      company,
      findCompanyLoading,
      findUserLoading,
      user,
      getConsonant,
      requestLogin,
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/pages/auth/auth.scss";
</style>
