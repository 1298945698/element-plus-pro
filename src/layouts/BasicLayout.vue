<template>
  <ElContainer>
    <slot></slot>
  </ElContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElContainer } from "element-plus";
const BasicLayout = defineComponent({
  components: { ElContainer }
});
export default BasicLayout;
</script>
