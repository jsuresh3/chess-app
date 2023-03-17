import logo from './logo.svg';
import './App.scss';

import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [turn, setTurn]  = useState("white")
   const [validation, setValidation] = useState(null)
  const chess = new Chess()
  const [chess2, setChess] = useState(new Chess());
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
        setTurn("white")
      }
      else
      {
        setTurn("black")
      }

      setChess(chess)
      setMChess(chess)
      console.log(res.data.puzzle.solution)
      setSolution(res.data.puzzle.solution)
      setMSolution(res.data.puzzle.solution)

      setValidation(true)
      //solutionParser()
    })
  
  },[])
  
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
      console.log(newSolution)
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
      result = gameCopy.move({
        from: solution[0].substring(0,2),
        to: solution[0].substring(2,4),
        promotion: "q", // always promote to a queen for example simplicity
      });
         
    const newSolution = solution
    newSolution.shift()
      console.log(newSolution)
      setSolution(newSolution)

      }
      if(result)
      {setChess(gameCopy)
      ;}
      return result; // null if the move was illegal, the move object if the move was legal

    }
    const refresh = () => {
      setSolution(mainSolution)
      setChess(mainChess2)
      setValidation(true)
    }
  if(chess2)
  {
  return (
    <div>
      <div
      style={validation?{ border: "1rem solid green" }:{border: "1rem solid red"}
        }
      className='chess-board'><Chessboard
      
        anim
         position={chess2.fen()}
        
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
      <button onClick={refresh}>Retry</button>
    </div>
    
  );
  }
}

export default App;
