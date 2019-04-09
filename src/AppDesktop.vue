<template>
  <div id="app">
    <el-container>
      <el-header>Campaigns</el-header>
      <el-main>
        <campaign-discovery :campaigns="campaigns"></campaign-discovery>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CampaignDiscovery from '@/desktop/pages/CampaignDiscovery';
import Campaigns from '@/assets/data/campaigns';

export default {
  name: 'app',
  data() {
    return {
      campaigns: Campaigns
    };
  },
  components: {
    CampaignDiscovery
  }
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
}
</style>
