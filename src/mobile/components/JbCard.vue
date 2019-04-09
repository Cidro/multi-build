<template>
  <f7-card class="jb-card">
    <f7-card-header class="jb-card__header">
      <a @click="handleHeaderClick(campaign)">{{ campaign.name }}</a>
    </f7-card-header>
    <f7-card-content class="jb-card__content">
      <jb-image :src="campaign.image"></jb-image>
      <div>{{ campaign.description }}</div>
    </f7-card-content>
  </f7-card>
</template>
<script>
import JbCard from '@/base/mixins/components/JbCard';

export default {
  mixins: [JbCard]
};
</script>
