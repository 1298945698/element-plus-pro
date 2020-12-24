<template>
  <ElContainer :style="{ height: '100vh' }">
    <ElAside width="208px"></ElAside>
    <ElContainer>
      <ElHeader height="48px"></ElHeader>
      <ElMain :style="{ padding: 0 }">
        <slot></slot>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ElContainer, ElAside, ElHeader, ElMain } from "element-plus";
const BasicLayout = defineComponent({
  components: { ElContainer, ElAside, ElHeader, ElMain }
});
export default BasicLayout;
</script>
