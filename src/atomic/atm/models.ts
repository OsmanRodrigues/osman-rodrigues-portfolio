export interface TypographyProps {
  centered?: boolean
  bolded?: boolean
}

export interface TitleProps extends TypographyProps {
  highlighted?: boolean
}

export type TextProps = TitleProps
