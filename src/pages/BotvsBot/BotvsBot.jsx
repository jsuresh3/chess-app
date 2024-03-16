import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
export default function BotvsBot() {
  const [game, setGame] = useState(new Chess());
  const [playerStart, setPlay] = useState(false);
  useEffect(()=>{
    makeRandomMove()
  },[game,playerStart])
  function makeAMove(move) {
    const gameCopy = new Chess();
    console.log(game.pgn)
    gameCopy.loadPgn(game.pgn())
    console.log(gameCopy)
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }
  function makeRandomMove() {
    setPlay(false)
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn())
    console.log(gameCopy.moves())
    const possibleMoves = gameCopy.moves();
    if (gameCopy.isGameOver()|| gameCopy.isDraw()|| possibleMoves.length === 0)
    {
      console.log('game over')
      return;} // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    console.log("possible moves -"+possibleMoves[randomIndex])
    makeAMove(possibleMoves[randomIndex]);
  }
  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });
    // illegal move
    if (move === null) return false;
    return true;
  }
  return (<div className="chess">
    <div className="chess-board">
        <h1>Bot vs Bot</h1>
    <Chessboard position={game.fen()} onPieceDrop={onDrop}
    />;
  </div>
  </div>)
}









