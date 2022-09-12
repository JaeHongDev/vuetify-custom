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

<script lang="ts">
import Vue, { ref, defineEmits } from "vue";

export default Vue.extend({
  name: "RadioButton",
  props: {
    data: Array,
  },
  setup(props, { emit }) {
    const selectedIndex = ref(-1);
    const changeSelectedIndex = (index: number) => {
      selectedIndex.value = index;
      emit("change:item", props.data[index]);
    };

    const setSelectedButtonClass = (index: number) =>
      index === selectedIndex.value ? "light-navy-button" : "";

    return {
      selectedIndex,
      changeSelectedIndex,
      setSelectedButtonClass,
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/components/AuthContainer/RadioButton/index.scss";
</style>
