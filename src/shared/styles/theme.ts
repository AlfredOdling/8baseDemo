import { MantineThemeOverride } from '@mantine/core'
import { neumorphButton, neumorphIconButton } from './styles'

export const theme: MantineThemeOverride = {
  components: {
    Title: {
      styles: {
        root: {
          color: 'white',
        },
      },
    },
    Text: {
      styles: {
        root: {
          color: 'white',
        },
      },
    },
    Button: {
      styles: {
        root: {
          ...neumorphButton,
          '&:hover': {
            transform: 'scale(0.97)',
            backgroundPosition: '100% 0',
            transition: 'all .35s ease-in-out',
          },
          '&:active': {
            transform: 'scale(0.93)',
          },
        },
      },
    },
    ActionIcon: {
      styles: {
        root: {
          ...neumorphIconButton,
          border: 'none',
          '&:hover': {
            transform: 'scale(0.95)',
            backgroundPosition: '100% 0',
            transition: 'all .35s ease-in-out',
          },
          '&:active': {
            transform: 'scale(0.91)',
          },
          '&:disabled': {
            background: 'transparent',
          },
        },
      },
    },
    Divider: {
      defaultProps: {
        color: '#868e9633',
      },
    },
    Select: {
      styles: {
        root: {
          '& .mantine-Select-input': {
            ...neumorphButton,
            color: 'white',
            border: 'none',

            '&:hover': {
              transform: 'scale(0.97)',
              backgroundPosition: '100% 0',
              transition: 'all .35s ease-in-out',
            },

            '&:active': {
              transform: 'scale(0.93)',
            },
          },

          '.mantine-Select-dropdown': {
            border: 'none',
            background:
              'linear-gradient(45deg,rgb(22, 21, 31, 1) 0%,rgb(22, 21, 31) 35%,rgb(0, 156, 188) 100%) no-repeat center center fixed',
          },

          '.mantine-Select-item': {
            color: 'white',
            background: '#0D3D4C !important',

            '&[data-selected]': {
              background: '#1ba5d0 !important',
            },

            '&:hover': {
              background: '#187e9e !important',
              transform: 'scale(0.97)',
              backgroundPosition: '100% 0',
              transition: 'all .35s ease-in-out',
            },

            '&:active': {
              transform: 'scale(0.93)',
            },
          },
        },
      },
    },
    TextInput: {
      styles: {
        root: {
          '.mantine-TextInput-input': {
            border: 'none',
            color: 'white',
            background: 'transparent',
            boxShadow:
              'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',

            '&:disabled': {
              background: 'transparent',
            },
          },
        },
      },
    },
  },
}
