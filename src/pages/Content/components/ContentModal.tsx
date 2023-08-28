import { Modal, Stack, Text } from '@mantine/core'

interface IContentModal {
  opened: boolean
  close: () => void
  item: any
}

export const BasicModal = (props: IContentModal) => {
  const { opened, close, item } = props

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={item.prompt}
      closeButtonProps={{
        sx: {
          all: 'inherit',
        },
      }}
    >
      <Stack
        sx={{
          height: '400px',
        }}
      >
        <Text color="black !important">{item.text}</Text>
      </Stack>
    </Modal>
  )
}
