import { css } from 'styled-components'

export enum PalleteColor {
  Primary = '#612F74',
  Secondary = '#E5E5E5',
  Acessory = '#C4C4C4',
  Gray = '#828282',
  Black = '#333333',
  White = '#FFFFFF'
}
export enum Typography {
  Font = 'Roboto',
  Family = 'sans-serif',
  Medium = '1rem',
  Large = '1.5rem'
}
export enum Breakpoint {
  XSmall = '20rem',
  Small = '23rem',
  Medium = '50rem',
  Large = '100rem',
  XLarge = '123rem'
}
export enum ZIndex {
  Low = -1,
  Neutral = 0,
  High = 100
}
export const border = {
  radius: '0.5rem',
  thickness: '0.25rem'
}
export const padding = {
  small: '0.5rem',
  medium: '1rem',
  large: '2rem'
}
export const overlayStyle = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${ZIndex.High};
`