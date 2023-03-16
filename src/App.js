import logo from './logo.svg';
import './App.scss';

import { Chessboard } from "react-chessboard";
import { printFEN, getMoves } from 'pgn-to-fen/PGNtoFEN';
import { Chess } from 'chess.js';


function App() {
  const chess = new Chess()
  console.log(getMoves("d4 Nf6 Nf3 g6 Nc3 d6 e4 c5 Be3 cxd4 Bxd4 Nc6 Be3 Qa5 Bd2 Bg7 Be2 O-O O-O Qb6 Rb1 Bg4 h3 Bxf3 Bxf3 Nd4 Be3 Nxf3+ Qxf3 Qc6 Bd4 a6 Bxf6 Bxf6 Nd5 Qxc2 Nxf6+ exf6 Qxf6 Qxe4 Qxd6 Rad8 Qb6 Rfe8 Rfe1 Qxe1+ Rxe1 Rxe1+ Kh2 Rd2 Kg3 Ree2 Qxb7 Rxb2 Qxa6 Rxa2 Qc8+ Kg7 Qc3+ Kg8 Qc5 Rxf2 Qc8+ Kg7 Qc3+ Kh6 Qe3+ Kg7 Qe5+ Kf8 Qh8+ Ke7 Qe5+ Kf8 Qb8+ Kg7 Qe5+ f6 Qe7+ Kh6 Qf8+ Kg5 h4+ Kh5 Qc5+ f5 Qc1 Rxg2+ Kh3 Rh2+ Kg3 Rag2+ Kf3 Rg4 Qd1 Rhxh4 Kf2 Rh2+ Kf3 Rh3+ Ke2 Rg2+ Kf1+ Rg4 Kf2 g5 Qd8 h6 Qe8+ Kh4 Kf1 h5 Qe1+ Rhg3 Qe5 f4 Qe1 f3 Kf2 Rf4 Qh1+ Rh3 Qe1 g4"))
  
  return (
    <div className='chess-board'><Chessboard 
    id = "Configurable Board"
    boardOrientation = 'black'
   position="r1b1k1nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1"
   
   />
    </div>
    
  );
}

export default App;
