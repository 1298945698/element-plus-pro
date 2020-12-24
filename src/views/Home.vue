<template>
  <div class="container">
    <ElButton size="mini">{{ btnName }}</ElButton>
    <ElRadioGroup v-model="radio">
      <ElRadio :label="0">0</ElRadio>
      <ElRadio :label="1">1</ElRadio>
    </ElRadioGroup>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
const Home = defineComponent({
  setup() {
    const btnName = "按钮";
    return {
      btnName
    };
  }
});
export default Home;
</script>

<style lang="less"></style>
