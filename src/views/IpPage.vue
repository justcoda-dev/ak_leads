<template>
  <div class="ip-page" v-if="userIpData">
    <h3>User IP information</h3>
    <p><b>IP:</b>{{ userIpData?.ip }}</p>
    <p><b>City:</b>{{ userIpData?.city }}</p>
    <p><b>Country:</b>{{ userIpData?.country_name }}</p>
    <p><b>ISP:</b>{{ userIpData?.isp }}</p>
  </div>
  <VLoading v-else/>
</template>

<script>
import {defineComponent} from "vue";
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import {request as getUserIp} from "../../apiIp";
import VLoading from "../components/VLoading";

export default defineComponent({
  name: "IpPage",
  components: {VLoading},
  setup() {
    const userIpData = ref(null)
    const route = useRoute()

    const getUserIpData = async () => {
      userIpData.value = await getUserIp("ipgeo")
    }

    onBeforeMount(async () => {
      await getUserIpData()
    })

    return {
      userIpData
    }
  }
})
</script>

<style scoped>
.ip-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>