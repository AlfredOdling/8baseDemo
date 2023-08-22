import { Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { Auth0ProviderWithRedirectCallback } from '../auth'
import { Header } from './Header'

export const MainLayout = () => {
  return (
    <Auth0ProviderWithRedirectCallback
      domain="dev-nhdp1bejfg718y3u.eu.auth0.com"
      clientId="wXTGak6ZbDqUTnJuxwTKOkSQ3jAzUutP"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '40px',
          }}
        >
          <Header />

          <Outlet />
        </motion.div>
      </AnimatePresence>
    </Auth0ProviderWithRedirectCallback>
  )
}
