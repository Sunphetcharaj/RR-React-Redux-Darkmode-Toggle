import React from 'react'
import NavLink from './NavLink'
import { useSelector } from 'react-redux'

function Nav() {
    const mode = useSelector(state => state)
    return (
        <div className="Nav" style={{'backgroundColor': mode.color4}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav