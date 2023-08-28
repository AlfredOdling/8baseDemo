import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LiaArrowLeftSolid, LiaSignOutAltSolid } from 'react-icons/lia'
import { Button, Group, Title } from '@mantine/core'

import { neumorph } from '../styles/styles'
import { ActionIcon } from './ActionIcon'

export const Header = () => {
  const navigate = useNavigate()
  const { logout, user } = useAuth0()

  return (
    <Group
      sx={{
        ...neumorph,
        width: '100%',
        alignItems: 'center',
        marginBottom: '40px',
        padding: '10px',
        justifyContent: 'space-between',
      }}
    >
      <ActionIcon
        disabled={window.location.pathname === '/'}
        onClick={() => navigate(-1)}
      >
        <LiaArrowLeftSolid />
      </ActionIcon>

      <Title order={4}>{user?.name}</Title>

      <Group spacing={2}>
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
      </Group>
    </Group>
  )
}
