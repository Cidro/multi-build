<template>
  <el-card class="jb-card">
    <div slot="header" class="clearfix jb-card__header" @click="handleHeaderClick(campaign)">
      <span>{{ campaign.name }}</span>
    </div>
    <div class="jb-card__content">
      <jb-image :src="campaign.image"></jb-image>
      <div>{{ campaign.description }}</div>
    </div>
  </el-card>
</template>
<script>
import JbCard from '@/base/mixins/components/JbCard';

export default {
  mixins: [JbCard]
};
</script>
