import { IconButton as IconButtonMUI, IconButtonProps } from '@mui/joy'
import { neumorph } from '../styles'

export const IconButton = (props: IconButtonProps) => (
  <IconButtonMUI
    sx={{
      ...neumorph,
      color: 'white',
      cursor: 'pointer',
      transition: '0.1s',

      '&:hover': {
        transform: 'scale(0.95)',
      },
      '&:active': {
        transform: 'scale(0.91)',
      },

      ...props.sx,
    }}
    {...props}
  />
)
