<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { EmojiButton } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: {
   EmojiButton,
  }
});
</script>

<template>
  <div id="app">
    <emoji-button />
  </div>
</template>
