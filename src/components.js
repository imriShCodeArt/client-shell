import React from 'react'

const ImpLink = React.lazy(() => import('components/Link'))
export const Link = ({ children, to, text, ...rest }) => {
  return (
    <React.Suspense fallback={<div />} key={text}>
      <ImpLink to={to} {...rest} >{children || text}</ImpLink>
    </React.Suspense>
  )
}
