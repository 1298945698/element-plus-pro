<template>
  <BasicLayout>
    <router-view />
  </BasicLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
const App = defineComponent({
  components: { BasicLayout }
});
export default App;
</script>
<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
}
</style>
