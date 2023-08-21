import { AnimatePresence } from 'framer-motion'
import { routes } from './shared/routes'
import { motion } from 'framer-motion'

export const App = () => {
  return (
    <AnimatePresence>
      {/* {React.cloneElement(routes, { key: location.pathname })} */}
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
        {routes}
      </motion.div>
    </AnimatePresence>
  )
}
