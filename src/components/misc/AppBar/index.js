import React from 'react'

const MyAppBar = React.lazy(() => import('top_app_bar/AppBar'))

function AppBar({drawer, links, centered, avatar }) {
  return (
    <React.Suspense fallback={<div />}>
      <MyAppBar {...{
        drawer,
        links,
        avatar,
      }}
        
      />
    </React.Suspense>
  )
}

export default AppBar

