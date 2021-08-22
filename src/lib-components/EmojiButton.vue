<template>
  <button ><img :src="emojiIcon" :height="height" /></button>
</template>

<script>
export default {
  name: "EmojiButton", // vue component name
  props: {
    height: {
      type: String,
      default: "20",
    },
    emoji: {
      type: String,
    },
  },
  data() {
    return{
      emojiIcon: "https://emojiapi.dev/api/v1/sparkles.svg"
    };
  },
  beforeUpdate(){
    const emojiName = this.$props.emoji
     this.emojiIcon = `https://emojiapi.dev/api/v1/${emojiName}.svg`
  },
  methods:{
    
  },
};
</script>

<style></style>
