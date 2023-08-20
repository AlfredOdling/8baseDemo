import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import Card from '@mui/joy/Card'
import { useAuth0 } from '@auth0/auth0-react'

export function LoginSignUp() {
  const { loginWithRedirect, logout } = useAuth0()

  return (
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
        <Button
          onClick={() => {
            loginWithRedirect()
          }}
        >
          login
        </Button>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </Card>
    </Stack>
  )
}
