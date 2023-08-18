import { AnimatePresence } from 'framer-motion'
import { routes } from './shared/routes'

export const App = () => {
  return (
    <AnimatePresence>
      {/* {React.cloneElement(routes, { key: location.pathname })} */}
      {routes}
    </AnimatePresence>
  )
}
