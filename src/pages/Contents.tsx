import Stack from '@mui/joy/Stack'
import { motion } from 'framer-motion'
import { Divider, Typography } from '@mui/joy'
import { LiaPlusSolid, LiaSpinnerSolid, LiaTrashSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { useContentCreate } from '../api/useContent/contentCreate'
import { useContents } from '../api/useContent/contents'
import { useContentDelete } from '../api/useContent/contentDelete'
import { Button } from '../shared/components/Button'
import { neumorph } from '../shared/styles'
import { IconButton } from '../shared/components/IconButton'

export function ContentsPage() {
  const navigate = useNavigate()
  const contentCreate = useContentCreate()
  const contentDelete = useContentDelete()
  const contentsList = useContents()
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <Stack
      width={'75%'}
      maxWidth={'800px'}
      alignItems={'flex-start'}
      p={3}
      spacing={3}
      sx={{
        ...neumorph,
      }}
    >
      <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
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

      {contentsList?.data?.map((item: any) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={`${item.id}-contents`}
        >
          <Stack direction={'row'} spacing={2}>
            <Button onClick={() => navigate(item.id)}>
              {!isMobile
                ? item.title
                : item.title.length > 25
                ? `${item.title.substring(0, 25)}...`
                : item.title}
            </Button>

            <IconButton
              variant="solid"
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
        </motion.div>
      ))}
    </Stack>
  )
}
