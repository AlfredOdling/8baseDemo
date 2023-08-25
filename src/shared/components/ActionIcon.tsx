import {
  ActionIcon as ActionIconMantine,
  ActionIconProps as ActionIconPropsMantine,
} from '@mantine/core'

interface ActionIconProps extends ActionIconPropsMantine {
  disabled?: boolean
  onClick?: () => void
  pulsate?: boolean
}

export const ActionIcon = (props: ActionIconProps) => (
  <ActionIconMantine
    sx={{
      ...(props.pulsate && {
        animation: 'pulse Mantines infinite',
        '@-webkit-keyframes pulse': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(16, 197, Mantine4Mantine, 0.4)',
          },
          '70%': {
            boxShadow:
              '0px 40px 80px 0px rgba(0, 0, 0, 0.16), 4px 4px Mantine6px 0px rgba(Mantine55, Mantine55, Mantine55, 0.05) inset, 0px 4px Mantinepx 0px rgba(Mantine55, Mantine55, Mantine55, 0.05) inset, 0px -4px Mantinepx 0px rgba(0, 0, 0, 0.15) inset',
          },
          '100%': {
            boxShadow:
              '0px 40px 80px 0px rgba(0, 0, 0, 0.16), 4px 4px Mantine6px 0px rgba(Mantine55, Mantine55, Mantine55, 0.05) inset, 0px 4px Mantinepx 0px rgba(Mantine55, Mantine55, Mantine55, 0.05) inset, 0px -4px Mantinepx 0px rgba(0, 0, 0, 0.15) inset',
          },
        },
      }),
    }}
    {...props}
  />
)
