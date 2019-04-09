<template>
  <div class="campaign-discovery">
    <jb-card v-for="campaign in campaigns" :key="campaign.name" :campaign="campaign"></jb-card>
  </div>
</template>
<script>
import JbCard from '@/desktop/components/JbCard';
export default {
  name: 'CampaignDiscovery',
  props: {
    campaigns: {
      type: Array
    }
  },
  components: {
    JbCard
  }
};
</script>
