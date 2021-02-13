//TODO:
//plugin list:
//babel-plugin-inline-react-svg
module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }], 'inline-react-svg']
}
