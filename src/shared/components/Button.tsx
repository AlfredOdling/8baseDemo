import { Button as ButtonMUI, ButtonProps } from '@mui/joy'
import { neumorph } from '../styles'

export const Button = (props: ButtonProps) => (
  <ButtonMUI
    sx={{
      ...neumorph,
      cursor: 'pointer',
      transition: '0.1s',

      '&:hover': {
        transform: 'scale(0.97)',
      },
      '&:active': {
        transform: 'scale(0.93)',
      },

      ...props.sx,
    }}
    {...props}
  />
)
