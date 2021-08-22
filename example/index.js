import { createApp } from 'vue';
import Example from './App.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import VueEmojiButton from '@/entry.esm';

const app = createApp(Example);
app.use(VueEmojiButton);

app.mount('#app');
