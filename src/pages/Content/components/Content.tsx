import {
  LiaCopy,
  LiaEye,
  LiaSpinnerSolid,
  LiaTrashSolid,
} from 'react-icons/lia'
import { Stack, Typography, Grid, Divider } from '@mui/joy'
import { motion } from 'framer-motion'

import { useContentTextDelete } from '../../../api/useContent/contentTextDelete'
import { neumorph } from '../../../shared/styles'
import { IconButton } from '../../../shared/components/IconButton'
import { Button } from '../../../shared/components/Button'
import { useState } from 'react'
import { BasicModal } from './ContentModal'
import { Alert, Snackbar } from '@mui/material'

export const Content = ({ content }: any) => {
  const contentTextDelete = useContentTextDelete()
  const [open, setOpen] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)

  const handleClick = () => {
    setOpenSnack(true)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  if (content.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Typography textColor={'white'} level="h4">
        Content
      </Typography>

      <Grid container width={'100%'} spacing={2} sx={{ flexGrow: 1 }}>
        {content.data?.contentText?.items?.map((item: any) => (
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
                      onClick={() => setOpen(true)}
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

            <BasicModal
              open={open}
              setOpen={setOpen}
              content={content}
              item={item}
            />
          </Grid>
        ))}
      </Grid>

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
