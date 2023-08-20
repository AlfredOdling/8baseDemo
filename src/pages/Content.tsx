import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import { motion } from 'framer-motion'
import { Divider, Typography } from '@mui/joy'
import { LiaPlusSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'
import { useContent } from '../api/useContent'

const gradientBackground2 = 'linear-gradient(45deg, #FE2443 30%, #FF8E53 90%)'

export function Content() {
  const navigate = useNavigate()
  const { contentCreate, contentsList } = useContent()

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
        height={'600px'}
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

          <Button
            loading={contentCreate.isLoading}
            onClick={() => contentCreate.mutate()}
            endDecorator={<LiaPlusSolid />}
          >
            New
          </Button>
        </Stack>

        {contentsList.isLoading ? (
          <Typography level="h3">Loading...</Typography>
        ) : (
          contentsList.data.map((item: any) => (
            <Button key={item.id} onClick={() => navigate(item.id)}>
              {item.title}
            </Button>
          ))
        )}

        <Divider />
      </Stack>
    </motion.div>
  )
}
