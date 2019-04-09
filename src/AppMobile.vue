<template>
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>
    <f7-view main>
      <campaign-discovery :campaigns="campaigns"></campaign-discovery>
    </f7-view>
  </f7-app>
</template>

<script>
import CampaignDiscovery from '@/mobile/pages/CampaignDiscovery';
import Campaigns from '@/assets/data/campaigns';

export default {
  name: 'app',
  data() {
    return {
      f7params: {
        id: 'com.jumbleberry.partners',
        name: 'Jumbleberry Partners',
        theme: 'ios',
        panel: {
          leftBreakpoint: 960,
          swipe: 'both'
        },
        statusbar: {
          overlay: 'auto',
          iosOverlaysWebView: true,
          androidOverlaysWebView: false
        }
      },
      campaigns: Campaigns
    };
  },
  components: {
    CampaignDiscovery
  }
};
</script>
