<template>
  <f7-page name="campaign-discovery" class="campaign-discovery">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon="icon-back"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Campaigns</f7-nav-title>
    </f7-navbar>
    <jb-card v-for="campaign in campaigns" :key="campaign.name" :campaign="campaign"></jb-card>
  </f7-page>
</template>
<script>
import JbCard from '@mobile/components/JbCard';
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
