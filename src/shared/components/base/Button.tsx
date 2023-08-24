import { Button as ButtonMUI, ButtonProps } from '@mui/joy'
import { neumorphButton } from '../../styles'

export const Button = (props: ButtonProps) => (
  <ButtonMUI
    {...props}
    sx={{
      ...neumorphButton,
      '&:hover': {
        transform: 'scale(0.97)',
        backgroundPosition: '100% 0',
        transition: 'all .35s ease-in-out',
      },
      '&:active': {
        transform: 'scale(0.93)',
      },
      '&.MuiButton-loading': {
        background: 'transparent ',
      },

      ...props.sx,
    }}
  />
)
