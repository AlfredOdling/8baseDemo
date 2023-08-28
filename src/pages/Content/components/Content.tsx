import { useState } from 'react'
import { LiaEye, LiaSpinnerSolid, LiaTrashSolid } from 'react-icons/lia'
import { motion } from 'framer-motion'
import { IconCopy, IconCheck } from '@tabler/icons-react'

import { useContentTextDelete } from '../../../api/useContent/contentTextDelete'
import { neumorph } from '../../../shared/styles/styles'
import { BasicModal } from './ContentModal'
import {
  ActionIcon,
  Button,
  CopyButton,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
  rem,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export const Content = ({ content }: any) => {
  const contentTextDelete = useContentTextDelete()
  const [opened, { open, close }] = useDisclosure(false)
  const [modalContent, setModalContent] = useState({})

  const sortedUpdatedAt = content.data?.contentText?.items.sort(
    (a: any, b: any) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    }
  )

  const openModal = (item: any) => {
    setModalContent(item)
    open()
  }

  if (content.isLoading) {
    return <LiaSpinnerSolid color="white" />
  }

  return (
    <>
      <Title
        order={4}
        sx={{
          marginTop: 10,
        }}
      >
        Content
      </Title>

      <Grid
        gutter="md"
        grow
        sx={{
          flexGrow: 1,
          padding: 10,
          maxHeight: '600px',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow:
            'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',
        }}
      >
        {sortedUpdatedAt.map((item: any) => (
          <Grid.Col xs={12} md={6} key={`${item.id}-content`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Stack
                key={`${item.id}-content`}
                sx={{
                  ...neumorph,
                  height: '220px',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  padding: 15,
                }}
              >
                <Stack spacing={10}>
                  <Text lineClamp={1}>{item.prompt}</Text>
                  <Divider />

                  <Text lineClamp={3}>{item.text}</Text>
                </Stack>

                <Group
                  sx={{
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Group spacing={8}>
                    <Button
                      onClick={() => openModal(item)}
                      leftIcon={<LiaEye />}
                    >
                      View
                    </Button>

                    <CopyButton value="https://mantine.dev" timeout={2000}>
                      {({ copied, copy }) => (
                        <Tooltip
                          label={copied ? 'Copied' : 'Copy'}
                          withArrow
                          position="right"
                        >
                          <ActionIcon
                            color={copied ? 'teal' : 'gray'}
                            variant="subtle"
                            onClick={copy}
                          >
                            {copied ? (
                              <IconCheck style={{ width: rem(16) }} />
                            ) : (
                              <IconCopy style={{ width: rem(16) }} />
                            )}
                          </ActionIcon>
                        </Tooltip>
                      )}
                    </CopyButton>
                  </Group>

                  <ActionIcon
                    variant="solid"
                    size="lg"
                    onClick={() =>
                      contentTextDelete.mutate({
                        id: item.id,
                      })
                    }
                  >
                    {contentTextDelete.isLoading ? (
                      <LiaSpinnerSolid />
                    ) : (
                      <LiaTrashSolid />
                    )}
                  </ActionIcon>
                </Group>
              </Stack>
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>

      <BasicModal opened={opened} close={close} item={modalContent} />
    </>
  )
}
