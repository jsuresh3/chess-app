import logo from './logo.svg';
import './App.scss';

import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function App() {

  
  const chess = new Chess()
  const [chess2, setChess] = useState(null);
  
  useEffect(()=>{
    axios.get("https://lichess.org/api/puzzle/daily")
    .then((res)=>{
      chess.loadPgn(res.data.game.pgn)
      
      setChess(chess)
    })
  
  },[])
    
  if(chess2)
  {
  return (
    <div className='chess-board'><Chessboard 
    id = "Configurable Board"
    boardOrientation = 'black'
   position={chess2.fen()}
   
   />
    </div>
    
  );
  }
}

export default App;
