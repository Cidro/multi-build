<template>
  <f7-card>
    <f7-card-header>{{ campaign.name }}</f7-card-header>
    <f7-card-content>{{ campaign.description }}</f7-card-content>
  </f7-card>
</template>
<script>
import JbCard from '@base/mixins/components/JbCard';
export default {
  mixins: [JbCard]
};
</script>
