import { ActionIcon, Group, Modal, Stack, Text, Title } from '@mantine/core'
import { LiaCrossSolid } from 'react-icons/lia'

export const BasicModal = (props: any) => {
  const { opened, close, item } = props

  return (
    <Modal opened={opened} onClose={close} withCloseButton={false} bg={'red'}>
      <Stack
        sx={{
          height: '400px',
        }}
      >
        <Group>
          <ActionIcon variant="solid" size="lg" onClick={close}>
            <LiaCrossSolid color="black" />
          </ActionIcon>

          <Title order={4} color="black !important">
            {item.prompt}
          </Title>
        </Group>

        <Text color="black !important">{item.text}</Text>
      </Stack>
    </Modal>
  )
}
