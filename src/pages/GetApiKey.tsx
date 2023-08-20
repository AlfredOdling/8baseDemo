import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import Input from '@mui/joy/Input'
import Card from '@mui/joy/Card'

import { paths } from '../shared/routes'
import { useUser } from '../api/useUser'

const gradientBackground = 'linear-gradient(45deg, #FFFFFF 100%, #FFFFFF 100%)'
const gradientBackground2 = 'linear-gradient(45deg, #FE2443 30%, #FF8E53 90%)'

export function GetApiKey() {
  const [openApiKey, setOpenAIKey] = useState<string>('')
  const navigate = useNavigate()

  const { mutation } = useUser()

  return (
    <motion.div
      style={{ height: '100vh' }}
      initial={{ background: gradientBackground }}
      animate={{ background: gradientBackground2 }}
    >
      <Stack
        sx={{
          height: '100vh',
          width: '100vw',
        }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Card
          sx={{
            boxShadow:
              'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
          }}
        >
          <Input
            value={openApiKey}
            onChange={e => setOpenAIKey(e.target.value)}
            placeholder="OpenAI Key"
            required
          />

          <Button
            onClick={() => mutation.mutate({ openApiKey })}
            sx={{ mt: 4 }}
            // disabled={!openAIKey}
          >
            mutate
          </Button>

          <Button
            onClick={() => navigate(paths.content)}
            sx={{ mt: 4 }}
            // disabled={!openAIKey}
          >
            OK
          </Button>
        </Card>
      </Stack>
    </motion.div>
  )
}
