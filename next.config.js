// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/, // use MDX parsing for md & mdx files
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})