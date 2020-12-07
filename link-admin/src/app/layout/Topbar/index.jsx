import React from 'react'

import Link from 'components/Routing/Link'

import logo from 'images/link-sf.png'
import MenuToggleButton from 'components/MenuToggleButton'

const Topbar = () => {
  return (
    <header id="topbar" className="bg-gather flex">
      <div className="flex-1 p-2">
        <div className="sm:hidden inline-block">
          <MenuToggleButton color="white" size="36" />
        </div>
        <Link to="/">
          <img src={ logo } className="h-full" />
        </Link>
      </div>
    </header>
  )
}

export default Topbar
