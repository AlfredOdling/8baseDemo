import { useState } from 'react'
import {
  LiaCopy,
  LiaEye,
  LiaSpinnerSolid,
  LiaTrashSolid,
} from 'react-icons/lia'
import { motion } from 'framer-motion'

import { useContentTextDelete } from '../../../api/useContent/contentTextDelete'
import { neumorph } from '../../../shared/styles'
import { BasicModal } from './ContentModal'
import {
  Divider,
  Grid,
  Stack,
  Typography,
} from '../../../shared/components/base'
import { Button } from '../../../shared/components/base/Button'
import { IconButton } from '../../../shared/components/base/IconButton'
import { Snackbar } from '../../../shared/components/base/Snackbar'
import { Alert } from '../../../shared/components/base/Alert'

export const Content = ({ content }: any) => {
  const contentTextDelete = useContentTextDelete()
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState({})
  const [openSnack, setOpenSnack] = useState(false)

  const sortedUpdatedAt = content.data?.contentText?.items.sort(
    (a: any, b: any) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    }
  )

  const openModal = (item: any) => {
    setOpen(true)
    setModalContent(item)
  }

  const handleClick = () => {
    setOpenSnack(true)
  }

  const handleClose = (_: any, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  if (content.isLoading) {
    return <LiaSpinnerSolid color="white" />
  }

  return (
    <>
      <Typography textColor={'white'} level="h4">
        Content
      </Typography>

      <Grid
        container
        width={'100%'}
        spacing={2}
        sx={{
          flexGrow: 1,
          padding: 1,
          maxHeight: '600px',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow:
            'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',
        }}
      >
        {sortedUpdatedAt.map((item: any) => (
          <Grid xs={12} md={6} key={`${item.id}-content`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Stack
                key={`${item.id}-content`}
                height={'220px'}
                p={1.5}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                sx={{
                  ...neumorph,
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    textColor={'white'}
                    fontWeight={'bold'}
                    sx={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.prompt}
                  </Typography>
                  <Divider />

                  <Typography
                    textColor={'white'}
                    sx={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: '3',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>

                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Stack direction={'row'} spacing={1}>
                    <Button
                      onClick={() => openModal(item)}
                      endDecorator={<LiaEye />}
                    >
                      View
                    </Button>

                    <IconButton
                      variant="solid"
                      size="sm"
                      onClick={() =>
                        navigator.clipboard.writeText(item.text).then(() => {
                          handleClick()
                        })
                      }
                    >
                      <LiaCopy />
                    </IconButton>
                  </Stack>

                  <IconButton
                    variant="solid"
                    size="sm"
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
                  </IconButton>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <BasicModal open={open} setOpen={setOpen} item={modalContent} />

      <Snackbar
        open={openSnack}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  )
}
