<template>
  <el-card class="jb-card">
    <div slot="header" class="clearfix jb-card__header">
      <span>{{ campaign.name }}</span>
    </div>
    <div>{{ campaign.description }}</div>
  </el-card>
</template>
<script>
import JbCard from '@base/mixins/components/JbCard';
export default {
  mixins: [JbCard]
};
</script>
