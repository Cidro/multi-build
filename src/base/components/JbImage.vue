<template>
  <img :src="src" :alt="alt" class="jb-image" />
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
