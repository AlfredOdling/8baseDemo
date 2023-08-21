import { Routes, Route, Navigate } from 'react-router-dom'

import { ProtectedRoute } from './auth'
import { Contents } from '../pages/Contents'
import { Content } from '../pages/Content'
import { LoginSignUp } from '../pages/LoginSignUp'

export const paths = {
  contents: '/contents',
  loginSignUp: '/loginSignUp',
}

export const routes = (
  <Routes>
    <Route index element={<Navigate to={paths.contents} />} />
    <Route path={paths.contents}>
      <Route index element={<ProtectedRoute component={Contents} />} />
      <Route
        path=":contentId"
        element={<ProtectedRoute component={Content} />}
      />
    </Route>
    <Route
      path={paths.loginSignUp}
      element={<ProtectedRoute component={LoginSignUp} />}
    />
  </Routes>
)
