import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LiaArrowLeftSolid, LiaSignOutAltSolid } from 'react-icons/lia'
import { Stack, Typography } from '@mui/joy'

import { neumorph } from '../styles'
import { IconButton } from './IconButton'
import { Button } from './Button'

export const Header = () => {
  const navigate = useNavigate()
  const { logout, user } = useAuth0()

  return (
    <Stack
      sx={{
        ...neumorph,
        width: '100%',
        alignItems: 'center',
        marginBottom: '40px',
        direction: 'row',
        padding: '10px',
      }}
      direction={'row'}
      justifyContent={'space-between'}
    >
      <IconButton
        disabled={window.location.pathname === '/'}
        onClick={() => navigate(-1)}
      >
        <LiaArrowLeftSolid />
      </IconButton>

      <Typography textColor={'white'}>{user?.name}</Typography>

      <Button
        onClick={() =>
          logout({
            logoutParams: {
              returnTo:
                process.env.NODE_ENV === 'production'
                  ? 'https://main--delicate-eclair-57fb94.netlify.app/loginSignUp'
                  : 'http://localhost:3000/loginSignUp',
            },
          })
        }
      >
        Logout
        <LiaSignOutAltSolid style={{ marginLeft: '5px', strokeWidth: 1.2 }} />
      </Button>
    </Stack>
  )
}
