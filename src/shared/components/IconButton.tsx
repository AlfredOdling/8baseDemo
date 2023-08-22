import { IconButton as IconButtonMUI, IconButtonProps } from '@mui/joy'
import { neumorphIconButton } from '../styles'

interface IconButtonProps_ extends IconButtonProps {
  pulsate?: boolean
}

export const IconButton = (props: IconButtonProps_) => (
  <IconButtonMUI
    {...props}
    sx={{
      ...neumorphIconButton,

      '&:hover': {
        transform: 'scale(0.95)',
        backgroundPosition: '100% 0',
        transition: 'all .35s ease-in-out',
      },
      '&:active': {
        transform: 'scale(0.91)',
      },

      ...(props.pulsate && {
        animation: 'pulse 2s infinite',
        '@-webkit-keyframes pulse': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(16, 197, 242, 0.4)',
          },
          '70%': {
            boxShadow:
              '0px 40px 80px 0px rgba(0, 0, 0, 0.16), 4px 4px 26px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 2px 0px rgba(255, 255, 255, 0.05) inset, 0px -4px 2px 0px rgba(0, 0, 0, 0.15) inset',
          },
          '100%': {
            boxShadow:
              '0px 40px 80px 0px rgba(0, 0, 0, 0.16), 4px 4px 26px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 2px 0px rgba(255, 255, 255, 0.05) inset, 0px -4px 2px 0px rgba(0, 0, 0, 0.15) inset',
          },
        },
      }),
    }}
  />
)
