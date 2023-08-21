import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}: any) => {
  const navigate = useNavigate()

  const onRedirectCallback = (appState: { returnTo: any }) => {
    navigate((appState && appState.returnTo) || '')
  }

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  )
}

export const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, args)

  return <Component />
}
