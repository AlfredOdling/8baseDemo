import { Routes, Route } from 'react-router-dom'

import { ProtectedRoute } from './auth'
import { GetApiKey } from '../pages/GetApiKey'
import { Contents } from '../pages/Contents'
import { Content } from '../pages/Content'
import { LoginSignUp } from '../pages/LoginSignUp'

export const paths = {
  _: '/',
  getApiKey: '/',
  contents: '/contents',
  loginSignUp: '/loginSignUp',
}

export const routes = (
  <Routes>
    <Route path={paths._} element={<ProtectedRoute component={GetApiKey} />} />

    <Route
      path={paths.getApiKey}
      element={<ProtectedRoute component={GetApiKey} />}
    />

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
