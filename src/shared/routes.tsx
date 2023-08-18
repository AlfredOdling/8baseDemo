import { Routes, Route } from 'react-router-dom'

import { ProtectedRoute } from './auth'
import { GetApiKey } from '../pages/GetApiKey'
import { Content } from '../pages/Content'
import { NewContent } from '../pages/NewContent'
import { LoginSignUp } from '../pages/LoginSignUp'

export const paths = {
  _: '/',
  getApiKey: '/',
  content: '/content',
  newContent: '/newContent',
  loginSignUp: '/loginSignUp',
}

export const routes = (
  <Routes>
    <Route path={paths._} element={<ProtectedRoute component={GetApiKey} />} />
    <Route
      path={paths.getApiKey}
      element={<ProtectedRoute component={GetApiKey} />}
    />
    <Route
      path={paths.content}
      element={<ProtectedRoute component={Content} />}
    />
    <Route
      path={paths.newContent}
      element={<ProtectedRoute component={NewContent} />}
    />
    <Route
      path={paths.loginSignUp}
      element={<ProtectedRoute component={LoginSignUp} />}
    />
  </Routes>
)
