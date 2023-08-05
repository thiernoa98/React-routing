import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function GameLayout() {
  return (
    <>
      <nav>
        <ul>
            <li><Link to='/games/1'>Game 1 </Link></li>
            <li><Link to="/games/2"> Game 2 </Link> </li>
            <li><Link to="/games/new">New Game</Link></li>
        </ul>
      </nav>

        <Outlet context={{hello:"world"}} />
    </>
  )
}

export default GameLayout
