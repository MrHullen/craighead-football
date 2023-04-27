import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *'
      }
    })
  ],

  vitePlugin: {
    experimental: {
      inspector: {
        showToggleButton: 'always',
        toggleButtonPos: 'bottom-right'
      }
    }
  }
}

export default config