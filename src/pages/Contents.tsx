import Stack from '@mui/joy/Stack'
import { motion } from 'framer-motion'
import { Divider, Typography } from '@mui/joy'
import { LiaPlusSolid, LiaSpinnerSolid, LiaTrashSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'

import { useContentCreate } from '../api/useContent/contentCreate'
import { useContents } from '../api/useContent/contents'
import { useContentDelete } from '../api/useContent/contentDelete'
import { Button } from '../shared/components/Button'
import { neumorph } from '../shared/styles'
import { IconButton } from '../shared/components/IconButton'

export function Contents() {
  const navigate = useNavigate()
  const contentCreate = useContentCreate()
  const contentDelete = useContentDelete()
  const contentsList = useContents()

  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack
        width={'800px'}
        alignItems={'flex-start'}
        p={3}
        spacing={3}
        sx={{
          ...neumorph,
        }}
      >
        <Stack
          width={'100%'}
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Typography textColor={'white'} level="h2">
            Content
          </Typography>
          <Divider />

          <Button
            loading={contentCreate.isLoading}
            onClick={() => contentCreate.mutate()}
            endDecorator={<LiaPlusSolid />}
          >
            New
          </Button>
        </Stack>
        <Divider />

        {contentsList.isLoading ? (
          <Typography level="h3">Loading...</Typography>
        ) : (
          contentsList.data.map((item: any) => (
            <Stack direction={'row'} spacing={2} key={`${item.id}-contents`}>
              <Button onClick={() => navigate(item.id)}>{item.title}</Button>

              <IconButton
                size="sm"
                onClick={() => contentDelete.mutate(item.id)}
              >
                {contentDelete.isLoading ? (
                  <LiaSpinnerSolid />
                ) : (
                  <LiaTrashSolid />
                )}
              </IconButton>
            </Stack>
          ))
        )}
      </Stack>
    </motion.div>
  )
}
