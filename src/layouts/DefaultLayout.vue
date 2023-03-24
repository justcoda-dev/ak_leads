<template>
  <div class="layout">
    <VHeader/>
    <div class="content container ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import VHeader from "../components/VHeader.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {VHeader}
})
</script>

<style lang="scss" scoped>
.layout {
}

.content {
  margin-top: 5rem;
}
</style>