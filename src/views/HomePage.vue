<template>
  <div class="home-page">
    <VZipForm @onSubmit="onSubmit"/>
  </div>
</template>

<script lang="ts">
import VZipForm from "@/components/VZipForm.vue";
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "HomePage",
  components: {VZipForm},
  setup() {
    const router = useRouter()

    const onSubmit = (value: string) => {
      router.push({name: "zip", path: "zip", params: {zip: value}})
    }

    return {
      onSubmit
    }
  }
})
</script>

<style lang="scss">
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
