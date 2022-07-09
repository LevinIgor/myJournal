<template>
  <div>
    <Markdown :source="source" />
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";

export default {
  components: {
    Markdown,
  },
  data() {
    return {
      source: `# :sparkles: vue3-markdown-it demo :sparkles:

> Welcome to the <b>demo</b> Feel free to type anything in the textarea!
> > *Psst, enable the html option!* :P

https://github.com/JanGuillermo/vue3-markdown-it (*Enable the linkify option!~*)

___

## This is a h2 tag

Freaky, right? Oh yeah, have you seen this ~~horrible~~ **amazing** repository [here](https://github.com/JanGuillermo/vue3-markdown-it)?!

So far, it supports the following plugins:
- [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr) - Add abbreviations
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) - Add anchors
- [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist) - Add definition lists
- [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji) - Add emojis
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) - Add footnotes`,
    };
  },
};
</script>
<style>
@import "highlight.js/styles/monokai.css";
</style>
