<template>
  <el-card>
    <div slot="header" class="clearfix">
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
