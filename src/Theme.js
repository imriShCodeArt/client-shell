import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  CssBaseline,
  ThemeProvider,
  useTheme,
} from '@mui/material'

import theme from 'assets/myTheme'
import { Routes, useLocation, useNavigate } from 'react-router-dom'
import AppBar from './components/misc/AppBar'
import NavBar from './components/misc/Navbar/'
import Drawer from './components/misc/Drawer'
import ThemeContext from './assets/ThemeContext'
import myState from './assets/myState'
import BottomNavbar from './components/misc/BottomNavbar'
import Footer from './components/misc/Footer'

import Dashboard from '@mui/icons-material/Dashboard'
import Info from '@mui/icons-material/Info'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

const DRAEWR_WIDTH = 250

function Theme({ appbar, navbarLinks, footer, brand, children }) {
  const navigation = useNavigate()
  const t = useTheme()
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerAnchor, setDrawerAnchor] = useState('left')
  const [drawerContent, setDrawerContent] = useState(undefined)
  const [drawerWidth, setDrawerWidth] = useState(DRAEWR_WIDTH)

  function openDrawer() {
    setDrawerOpen(true)
  }
  function closeDrawer() {
    setDrawerOpen(false)
  }

  addEventListener('resize', () => {
    if (window.innerWidth < t.breakpoints.values.md) {
      setDrawerAnchor('top')
      setDrawerWidth('100vw')
    } else {
      setDrawerAnchor('left')
      setDrawerWidth(DRAEWR_WIDTH)
    }
  })

  const MyAppBar = () =>
    appbar && (
      <AppBar
        drawer={{
          open: drawerOpen,
          openDrawer: openDrawer,
          anchor: 'left',
          width: drawerWidth,
        }}
        links={{
          list: [
            { text: 'Home', href: '' },
            { text: 'About', href: 'about' },
          ],
        }}
        avatar={{ size:'xl',
          text:'D',
          items: [
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
          ],
        }}
      />
    )
  const MyNavBar = () => navbarLinks && <NavBar />
  const MyDrawer = () => (
    <Drawer
      closeDrawer={closeDrawer}
      anchor={drawerAnchor}
      open={drawerOpen}
      content={<>{drawerContent}</>}
      width={drawerWidth}
    />
  )
  const MyBottomNavbar = () => navbarLinks && <BottomNavbar />
  const MyFooter = () => footer && <Footer />

  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <ThemeContext.Provider
        value={{
          ...myState(),
          location: location.pathname,
        }}
      >
        <MyAppBar />
        <MyNavBar />
        <MyDrawer />
        <MyBottomNavbar />
        <Box height={'70vh'}>
          <Routes>{children}</Routes>
        </Box>

        <MyFooter />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

Theme.propTypes = {
  appbar: PropTypes.object,
}

Theme.defaultProps = {
  navbarLinks: [
    { text: 'Nature', href: 'category/nature' },
    { text: 'Science', href: 'category/science' },
    { text: 'Hystory', href: 'category/hystory' },
    { text: 'CS', href: 'category/computer-science' },
  ],
  footer: {},
}

export default Theme
