import { Modal, Stack, Title } from '@mantine/core'

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
      title={
        <Title order={4} color="black !important">
          {item.prompt}
        </Title>
      }
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
        {item.text}
      </Stack>
    </Modal>
  )
}
