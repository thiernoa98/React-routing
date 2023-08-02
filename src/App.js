import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import GameList from './Components/GameList';
import Game from './Components/Game';
import NewGame from './Components/NewGame';
import NotFound from './Components/NotFound';
import GameLayout from './Components/GameLayout';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/games'>Games List</Link></li>
        {/* /game/1, the 1 is dynamic, can be changed anyhting */}
        <li><Link to="/games/1">Game 1</Link></li>
        <li><Link to='/games/new'>New Games</Link></li>
      </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* nested routing, when params have the simialr names */}
        <Route path='/games' element={<GameLayout />}>
            <Route index element={<GameList />}/>

          {/* dynamic routing, switch to the a page based on the id */}
            <Route path=':id' element={<Game />} />

            <Route path='new' element={<NewGame />}/>
        </Route>

        {/* route to match anything */}
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
