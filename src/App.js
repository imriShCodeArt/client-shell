import Dashboard from '@mui/icons-material/Dashboard'
import Info from '@mui/icons-material/Info'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, useNavigate } from 'react-router-dom'

import './index.css'
import Theme from './Theme'

const ImpAvatar = React.lazy(() => import('components/Avatar'))
const Avatar = ({ ...props }) => (
  <React.Suspense fallback={<div />}>
    <ImpAvatar {...props} />
  </React.Suspense>
)

const App = () => {
  const navigation = useNavigate()
  const items = [
    {
      text: 'Profile',
      action: () => navigation('settings/profile'),
      icon: <Dashboard />,
    },
    {
      text: 'Account',
      action: () => navigation('settings/Account'),
      icon: <Info />,
    },
    {
      text: 'Settings',
      action: () => navigation('settings'),
      icon: <Settings />,
    },
    {
      text: 'divider',
    },
    {
      text: 'Log Out',
      action: () => navigation('logout'),
      icon: <Logout />,
    },
  ]
  return (
    <Theme appbar={{}}>
      <Route
        path={'*'}
        element={
          <>
            <Avatar items={items} text='F' />
          </>
        }
      />
    </Theme>
  )
}
const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
