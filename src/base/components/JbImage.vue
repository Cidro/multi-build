<template>
  <div class="jb-image">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'JbImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  }
};
</script>
