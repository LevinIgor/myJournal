import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Markdown from 'vue3-markdown-it';

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';


VMdEditor.lang.use('en-US', enUS);



// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

VMdEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)

app.use(router).use(Markdown).use(VMdEditor)

app.mount('#app')
