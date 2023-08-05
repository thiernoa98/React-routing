import React from 'react'
//useParams hook
import { useParams, useOutletContext } from 'react-router-dom';

function Game() {
    const {id} = useParams();

    //context is from GameLayout.jsx
    const context = useOutletContext();
  return (
    <div>
      <h1>Game {id} {context.hello} </h1>
    </div>
  )
}

export default Game;
