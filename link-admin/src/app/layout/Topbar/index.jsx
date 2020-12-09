import React from 'react'

import Link from 'components/Routing/Link'

import logo from 'images/link-sf.png'
import MenuToggleButton from 'components/MenuToggleButton'

const Topbar = () => {
  return (
    <header id="topbar" className="flex-nowrap flex p-2 overflow-hidden bg-yellow-200">
      <div className="flex-0">
        <div className="sm:hidden inline-block">
          <MenuToggleButton color="white" size="36" />
        </div>
      </div>
      <Link to="/">
        <img src={ logo } className="max-w-full max-h-full" />
      </Link>
    </header>
  )
}

export default Topbar
