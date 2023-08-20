import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import { motion } from 'framer-motion'
import { Divider, Typography } from '@mui/joy'
import { LiaPlusSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'

import { useContentCreate } from '../api/useContent/contentCreate'
import { useContents } from '../api/useContent/contents'
import { useContentDelete } from '../api/useContent/contentDelete'

const gradientBackground2 = 'linear-gradient(45deg, #FE2443 30%, #FF8E53 90%)'

export function Contents() {
  const navigate = useNavigate()
  const contentCreate = useContentCreate()
  const contentDelete = useContentDelete()
  const contentsList = useContents()

  return (
    <motion.div
      initial={{ background: gradientBackground2 }}
      animate={{ background: '#FCFCFC' }}
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
        borderRadius={6}
        sx={{
          p: 3,
          background: 'white',
          boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
        }}
        spacing={3}
      >
        <Stack
          width={'100%'}
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Typography level="h2">Content creation</Typography>
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
            <Stack direction={'row'} spacing={2}>
              <Button key={item.id} onClick={() => navigate(item.id)}>
                {item.title}
              </Button>

              <Button
                key={item.id}
                loading={contentDelete.isLoading}
                onClick={() => contentDelete.mutate(item.id)}
              >
                Delete
              </Button>
            </Stack>
          ))
        )}
      </Stack>
    </motion.div>
  )
}
