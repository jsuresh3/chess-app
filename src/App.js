import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Puzzles from './pages/Puzzles/Puzzles';
import Friend from './pages/Friend/Friend';
import Bot from './pages/Bot/Bot';
import BotvsBot from './pages/BotvsBot/BotvsBot';
import Header from './components/Header/Header';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Navigate to={'/'} />}></Route>
          <Route path='/puzzles' element={<Puzzles />}></Route>
          <Route path='/friend' element={<Friend />}></Route>
          <Route path='/bot' element={<Bot />}></Route>
          <Route path='/botvsbot' element={<BotvsBot />}></Route>
          {/* <Route path='*' element={<NotFound />}></Route> */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
