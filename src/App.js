import './App.scss';
<<<<<<< HEAD

import { Chessboard } from "react-chessboard";
import  Chess  from 'chess.js';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [turn, setTurn]  = useState("White")
   const [validation, setValidation] = useState(null)
  const chess = new Chess()
  const [chess2, setChess] = useState(new Chess());
  const [chess3, setChess3] = useState(new Chess());
  const [mainChess2, setMChess] = useState(new Chess());
  const [solution, setSolution] = useState(null);
  const [mainSolution, setMSolution] = useState(null);
  
  const id = ["00sHx","00sJ9","00sJb","00sJb"]

  
  useEffect(()=>{
    axios.get("https://lichess.org/api/puzzle/"+id[Math.floor(Math.random() * id.length)])
    .then((res)=>{
      chess.loadPgn(res.data.game.pgn)
      
      const turnsarray = res.data.game.pgn.split(" ")
      if(turnsarray.length%2==0)
      {
        setTurn("White")
      }
      else
      {
        setTurn("Black")
      }
      const sol = (res.data.puzzle.solution)
      setMSolution([...sol])
      setChess(chess)
      
      setMChess(chess)
      console.log(res.data.puzzle.solution)
      setSolution([...sol])
      setChess3(chess)
      setValidation(true)
      //solutionParser()
    })
  
  },[])
  useEffect(()=>{
    const newchess = new Chess()
    newchess.load(chess2.fen())
    setChess3(chess2)
  },[chess2])


    function checkSolution(ssquare,tsquare){
      
    if(solution[0].includes(ssquare+tsquare))
    {
        setValidation(true)
    }
    
      else{
        setValidation(false)
      }
    }

    function onDrop(sourceSquare, targetSquare) {
      

      checkSolution(sourceSquare, targetSquare)
      const newSolution = solution
      if(validation){
      newSolution.shift()
      console.log("ms "+mainSolution)
      setSolution(newSolution)
      }
      
      try {
        makeAMove({
          from: sourceSquare,
          to: targetSquare,
          promotion: "q", // always promote to a queen for example simplicity
        })

        
      } catch (error) {
        
      }

     
     
    }

    function makeAMove(move) {
      const gameCopy = new Chess(chess2.fen());
      let result = null
     if(validation)

      {
        console.log(chess2.pgn())
        
      
        console.log(move)
        result = gameCopy.move(move);
  


      if(result)
      {setChess(gameCopy)
      ;}

      }
      return result; // null if the move was illegal, the move object if the move was legal

    }
    const refresh = () => {
      setSolution([...mainSolution])
      console.log("ms"+mainSolution)
      setChess(mainChess2)
      setValidation(true)
    }
  if(!!solution)
  {
  return (
    <div className='chess'>
      <div
      style={validation?{ border: "1rem solid green" }:{border: "1rem solid red"}
        }
      className='chess-board'><Chessboard
      
        
         position={chess3.fen()}
        
         animationDuration = {500}
          onPieceDrop={onDrop}
          // onPieceDragEnd={
          //   (piece,square)=>{
          //     checkSolution(piece,square)
          //   }
          //      }
        
         />
      </div>
      <h1>{turn}</h1>
      <h1
       style={{display: !!solution.length ? 'none' : 'block' }}
      >Win</h1>
      
      <button onClick={refresh}>Retry</button>
=======
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
>>>>>>> origin/feature-botvbot
    </div>
  </BrowserRouter>
  );
}

export default App;
