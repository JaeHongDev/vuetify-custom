<template>
  <div class="radio-button__wrap">
    <v-btn
      v-for="(item, index) in data"
      :key="index"
      class="radio-button"
      :class="setSelectedButtonClass(index)"
      @click="changeSelectedIndex(index)"
      >{{ item }}</v-btn
    >
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

defineProps({
  data: Array,
});

const selectedIndex = ref(-1);

const changeSelectedIndex = (index: number) => {
  selectedIndex.value = index;
};
const setSelectedButtonClass = (index: number) =>
  index === selectedIndex.value ? "light-navy-button" : "";
</script>

<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/components/AuthContainer/RadioButton/index.scss";
</style>
