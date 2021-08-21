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
      default: "face_with_tears_of_joy",
    },
  },
  data() {
    return{
      emojiIcon: null,
    };
  },
  mounted(){
    const emojiName = this.$props.emoji
     this.emojiIcon = `https://emojiapi.dev/api/v1/${emojiName}.svg`
    console.log(this.$props.emoji);
  },
  methods:{
    
  },
};
</script>

<style></style>
