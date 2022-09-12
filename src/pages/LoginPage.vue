<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <v-card-title>title</v-card-title>
        <v-card-text>
          <radio-button :data="data"></radio-button>
        </v-card-text>
        <v-card-text>
          <v-btn @click="getConsonant('ㅅ')"> 1234 </v-btn>
        </v-card-text>
        <v-card-text>
          {{ company }}
          <v-select
            :items="company"
            outlined
            label="기업 및 대학 선택"
            item-text="name"
            item-value="abbreviation"
            dense
          ></v-select>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import AuthService from "@/data/auth";
import RadioButton from "@/components/Auth/Molecule/RadioButton.vue";
import { ref } from "vue";
const authService = new AuthService();
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

const getConsonant = async () => {
  company.value = await authService.getCompanyByConsonant("ㅅ");
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/pages/auth/auth.scss";
</style>
