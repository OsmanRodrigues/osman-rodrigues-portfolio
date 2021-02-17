module.exports = {
  presets: [
    'next/babel',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  plugins: [['styled-components', { ssr: true }]]
}
