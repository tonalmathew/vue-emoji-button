<template>
  <div id="app">
    <label for="emoji">Enter Emoji Name: </label>
    <input v-model="emojiName" type="text" name="emoji">
    <button @click="findEmoji" type="submit">Find</button>
    <br /> <br />
    <emoji-button height="50" :emoji="emoji" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { EmojiButton } from "@/entry.esm";

export default defineComponent({
  name: "example",
  components: {
    EmojiButton,
  },
  data(){
    return{
      emojiName:null,
      emoji:null
    }
  },
  methods:{
    findEmoji(){
      this.emoji = this.emojiName
    }
  },
});
</script>
