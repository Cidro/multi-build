import JbImage from '@/base/components/JbImage';

export default {
  name: 'JbCard',
  props: {
    campaign: {
      type: Object,
      required: true
    }
  },
  components: {
    JbImage
  },
  methods: {
    handleHeaderClick(campaign) {
      console.log('Campaign', campaign);
    }
  }
};
