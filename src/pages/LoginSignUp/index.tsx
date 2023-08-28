import { Suspense, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { motion, MotionConfig, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { Alert, Anchor, Button, Stack } from '@mantine/core'

import { Shapes } from './Shapes'
import { transition } from './settings'
import './styles.css'

export function LoginSignUpPage() {
  const { loginWithRedirect } = useAuth0()
  const [show, setShow] = useState(false)

  const [ref, bounds] = useMeasure({ scroll: false })
  const [isHover, setIsHover] = useState(false)
  const [isPress, setIsPress] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const resetMousePosition = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <>
      <MotionConfig transition={transition}>
        <div className="bodyish">
          <motion.button
            id="loginButton"
            className="animation"
            ref={ref}
            initial={false}
            animate={isHover ? 'hover' : 'rest'}
            whileTap="press"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.3 },
              press: { scale: 1.2 },
            }}
            onHoverStart={() => {
              resetMousePosition()
              setIsHover(true)
            }}
            onHoverEnd={() => {
              resetMousePosition()
              setIsHover(false)
            }}
            onTapStart={() => setIsPress(true)}
            onTap={() => setIsPress(false)}
            onClick={() => loginWithRedirect()}
            onTapCancel={() => setIsPress(false)}
            onPointerMove={e => {
              mouseX.set(e.clientX - bounds.x - bounds.width / 2)
              mouseY.set(e.clientY - bounds.y - bounds.height / 2)
            }}
          >
            <motion.div
              className="shapes"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              <div className="pink blush" />
              <div className="blue blush" />
              <div className="container">
                <Suspense fallback={null}>
                  <Shapes
                    isHover={isHover}
                    isPress={isPress}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                </Suspense>
              </div>
            </motion.div>
            <motion.div
              variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
              className="label"
            >
              Enter
            </motion.div>
          </motion.button>
        </div>
      </MotionConfig>

      <Button
        onClick={() => setShow(!show)}
        sx={{
          position: 'absolute',
          top: '20px',
          left: '0',
          right: '0',
          width: '190px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        How was this made?
      </Button>

      {show && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Alert
            sx={{
              zIndex: 1000,
              position: 'absolute',
              top: '80px',
              left: '0',
              right: '0',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '90%',
              width: '500px',
            }}
            color="blue"
          >
            <Stack spacing={3}>
              <strong>Backend: </strong>
              <Anchor
                referrerPolicy="no-referrer"
                href="https://www.8base.com/"
              >
                - 8base (GraphQL BaaS)
              </Anchor>
              <Anchor
                referrerPolicy="no-referrer"
                href="https://flask.palletsprojects.com/en/2.3.x/"
              >
                - Flask (running OpenAIs python API)
              </Anchor>
              <Anchor
                referrerPolicy="no-referrer"
                href="https://www.railway.app/"
              >
                - Railway (hosting Flask server)
              </Anchor>
            </Stack>

            <Stack mt={15} spacing={3}>
              <strong>Frontend: </strong>
              <Anchor referrerPolicy="no-referrer" href="https://react.dev/">
                - React
              </Anchor>
              <Anchor referrerPolicy="no-referrer" href="https://mantine.dev/">
                - Mantine (Component library)
              </Anchor>
              <Anchor
                referrerPolicy="no-referrer"
                href="https://tanstack.com/query/v3/"
              >
                - React Query (Data fetching)
              </Anchor>
              <Anchor referrerPolicy="no-referrer" href="https://netlify.com/">
                - Netlify (Hosting)
              </Anchor>
              <Anchor
                referrerPolicy="no-referrer"
                href="https://www.framer.com/motion/"
              >
                - Framer Motion / Framer Motion 3D (Animations)
              </Anchor>
            </Stack>

            <Stack mt={15} spacing={3}>
              <strong>Github </strong>
              <Anchor
                referrerPolicy="no-referrer"
                href="https://github.com/AlfredOdling/8baseDemo"
              >
                - Frontend
              </Anchor>
              <Anchor
                referrerPolicy="no-referrer"
                href="https://github.com/AlfredOdling/flask"
              >
                - Backend
              </Anchor>
            </Stack>
          </Alert>
        </motion.div>
      )}
    </>
  )
}
