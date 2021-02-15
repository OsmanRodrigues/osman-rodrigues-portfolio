import { PalleteColor, Spacing, Typography } from '@shared/atomic/obj/constants'

const theme = {
  colors: {
    acessory: PalleteColor.Acessory,
    background: PalleteColor.Secondary,
    highlight: PalleteColor.Black,
    link: PalleteColor.Gray,
    primary: PalleteColor.Primary,
    secondary: PalleteColor.White,
    text: PalleteColor.White,
    title: PalleteColor.Gray
  },
  typography: {
    font: Typography.Font,
    family: Typography.Family,
    size: Typography.Size,
    largeSize: Typography.LargSize
  },
  spacing: {
    padding: {
      normal: Spacing.Padding,
      large: Spacing.LargePadding
    }
  }
}

export default theme
