import { Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { Auth0ProviderWithRedirectCallback } from '../auth'
import { Header } from './Header'
import { env } from '../env'

export const ProtectedLayout = () => {
  return (
    <Auth0ProviderWithRedirectCallback
      domain={env.AUTH0_DOMAIN}
      clientId={env.AUTH0_CLIENT_ID}
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
