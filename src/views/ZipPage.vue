<template>
  <div class="zip-page" v-if="zipLocationData">
    <h3>ZIP code information</h3>
    <p><b>State:</b> {{ zipLocationData?.state }}</p>
    <p><b>City:</b> {{ zipLocationData?.city }}</p>
    <p><b>Province:</b> {{ zipLocationData?.province }}</p>
    <p><b>Latitude:</b> {{ zipLocationData?.latitude }}</p>
    <p><b>Longtitue:</b> {{ zipLocationData?.longitude }}</p>
      <button class="btn btn-primary" @click="onShowIpClick">Show my Ip</button>
  </div>
  <VLoading v-else/>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {request as getByZip} from "../../apiZip";
import VLoading from "../components/VLoading";

export default {
  name: "DataPage",
  components: {VLoading},
  setup() {
    const route = useRoute()
    const router = useRouter()

    const zipLocationData = ref(null)

    const onShowIpClick = () => {
      router.push({name: "ip", path: "/ip"})
    }

    const getZipData = async (zipCode) => {
      const zipData = await getByZip("search", {
        codes: zipCode,
        country: "us"
      })

      if (Array.isArray(zipData.results)) {
        return await router.push({name: "home", path: "/"})
      }

      zipLocationData.value = zipData.results[zipCode][0]
    }

    onBeforeMount(async () => {
      if (route.params?.zip) {
        await getZipData(route.params.zip)
      } else {
        await router.push({name: "home", path: "/"})
      }
    })

    return {
      zipLocationData,
      onShowIpClick
    }
  }

}
</script>

<style lang="scss" scoped>
.zip-page {
display: flex;
  flex-direction: column;
  align-items: center;
}
</style>