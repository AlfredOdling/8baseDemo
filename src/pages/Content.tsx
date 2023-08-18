import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import Card from '@mui/joy/Card'
import { motion } from 'framer-motion'
import { Box, Divider, IconButton, SvgIcon, Typography } from '@mui/joy'
import { LiaPlusSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'
import { paths } from '../shared/routes'

export function Content() {
  const gradientBackground =
    'linear-gradient(45deg, #FFFFFF 100%, #FFFFFF 100%)'
  const gradientBackground2 = 'linear-gradient(45deg, #FE2443 30%, #FF8E53 90%)'
  const navigate = useNavigate()

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
            onClick={() => navigate(paths.newContent)}
            endDecorator={<LiaPlusSolid />}
          >
            New
          </Button>
        </Stack>

        <Divider />
      </Stack>
    </motion.div>
  )
}
