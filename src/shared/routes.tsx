import { Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { ProtectedRoute } from './auth'
import { ContentsPage } from '../pages/Contents'
import { ContentPage } from '../pages/Content'
import { LoginSignUpPage } from '../pages/LoginSignUp'
import { Avatar, Dropdown, Menu, MenuButton, MenuItem, Stack } from '@mui/joy'
import { neumorph } from './styles'
import { Button } from './components/Button'
import { IconButton } from './components/IconButton'
import {
  LiaArrowLeftSolid,
  LiaBackspaceSolid,
  LiaSignOutAltSolid,
} from 'react-icons/lia'

export const paths = {
  contents: '/contents',
  loginSignUp: '/loginSignUp',
}

function Layout(props: any) {
  const { logout, user } = useAuth0()
  const navigate = useNavigate()

  return (
    <>
      <Stack
        sx={{
          ...neumorph,
          width: '100%',
          alignItems: 'flex-end',
          marginBottom: '40px',
        }}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <IconButton size="lg" onClick={() => navigate(-1)}>
          <LiaArrowLeftSolid />
        </IconButton>

        <Dropdown>
          <MenuButton
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            <Avatar sx={{ width: 40, height: 40 }} alt={user?.name} />
          </MenuButton>

          {/* @ts-ignore*/}
          <Menu
            // @ts-ignore
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            <MenuItem
              // @ts-ignore
              sx={{
                color: 'white',
                ':hover': {
                  backgroundColor: 'transparent',
                },
              }}
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: 'http://localhost:3000/loginSignUp',
                  },
                })
              }
            >
              Logout
              <LiaSignOutAltSolid />
            </MenuItem>
          </Menu>
        </Dropdown>
      </Stack>

      <Outlet />
    </>
  )
}

export const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<ProtectedRoute component={ContentsPage} />} />
      <Route
        path=":contentId"
        element={<ProtectedRoute component={ContentPage} />}
      />
    </Route>

    <Route path={paths.loginSignUp} element={<LoginSignUpPage />} />
  </Routes>
)
