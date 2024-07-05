// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
  dirs: {
    src: ['./src'],
  },
}).append({
  ignores: ['examples/**/*', 'tests'],
})
