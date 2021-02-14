module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    'inline-react-svg',
    '@babel/preset-react'
  ]
}
