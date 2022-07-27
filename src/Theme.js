import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'

import theme from 'assets/myTheme'
import { Routes, useLocation } from 'react-router-dom'
import AppBar from './components/misc/AppBar'
import NavBar from './components/misc/Navbar/'
import Drawer from './components/misc/Drawer'
import ThemeContext from './assets/ThemeContext'
import myState from './assets/myState'
import BottomNavbar from './components/misc/BottomNavbar'
import Footer from './components/misc/Footer'
import { Link } from './components/misc/Navbar/components'

function Theme({ appbar, navbarLinks, footer, brand, children }) {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerAnchor, setDrawerAnchor] = useState('left')
  const [drawerContent, setDrawerContent] = useState(undefined)

  function openDrawer(anchor, content) {
    setDrawerAnchor(anchor)
    content && setDrawerContent(<>{content}</>)
    setDrawerOpen(true)
  }
  function closeDrawer() {
    setDrawerOpen(false)
  }
  
  addEventListener('resize', () =>
    window.innerWidth < t.breakpoints.values.md
      ? setDrawerAnchor('top')
      : setDrawerAnchor('left')
  )

  const MyAppBar = () =>
    appbar && (
      <AppBar 
        drawer={{
          open: drawerOpen,
          openDrawer: openDrawer,
          anchor: 'left',
          width: 250,
        }}
        links={{
          list:[
            {text:'Home', href:''},
            {text:'About', href:'about'},
          ]
        }}
        avatar={{
          items:[
            <Link text={'Profile'} to={'profile'} />,
            <Link text={'Settings'} to={'settings'} />
          ]
        }}
      />
    )
  const MyNavBar = () => navbarLinks && <NavBar />
  const MyDrawer = () => <Drawer />
  const MyBottomNavbar = () => navbarLinks && <BottomNavbar />
  const MyFooter = () => footer && <Footer />

  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <ThemeContext.Provider
        value={{
          ...myState(
            closeDrawer,
            drawerOpen,
            drawerAnchor,
            drawerContent,
            navbarLinks
          ),
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
