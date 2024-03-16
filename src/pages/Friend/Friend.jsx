import { Chessboard } from "react-chessboard";
import { useEffect, useState } from "react";
import axios from "axios";
import './Friend.scss';

const Friend = () => {


  function replaceChessNotations(str) {
    const piece= {
      "wP": "White pawn",
      "wN": "White Knight",
      "wB": "White Bishop",
      "wR": "White Rook",
      "wQ": "White Queen",
      "wK": "White King",
      "bP": "Black Pawn",
      "bN": "Black Knight",
      "bB": "Black Bishop",
      "bR": "Black Rook",
      "bQ": "Black Queen",
      "bK": "Black King"
    };
    
    return str.replace(/wP|wN|wB|wR|wQ|wK|bP|bN|bB|bR|bQ|bK/g, match => piece[match]);
  }

  const [joke, setJoke] = useState("")
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const apiUrl = 'https://api.openai.com/v1/';
  const [currentPiece, setPiece] = useState(null)
  const [currentSq, setSq] = useState(null)
  
  // Set up the prompt
  const prompt = 'Make a joke about chess';
  const model = 'text-davinci-003'; // Change this to the engine you want to use
  const maxTokens = 10;
  
  const client = axios.create({
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });  
  // Send the Axios request
  useEffect(() => {
    const params = {
      prompt: "Make a joke about the chess piece  - "+(!!currentPiece?currentPiece:"")
       + " " + (!!currentSq?"":""), 
      model: "text-davinci-003",
      max_tokens: 50,
      temperature: 0,
    };
    
    client
      .post("https://api.openai.com/v1/completions", params)
      .then((result) => {
        console.log(result.data);
        setJoke(replaceChessNotations(result.data.choices[0].text))
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPiece, currentSq])
  
 function changeChess(piece,sourceSquare)
  {
    setPiece(piece)
    setSq(sourceSquare)
  }
  
  return ( 
    <div className="chess">
      <div className="chess-board">
        <h1>Play a Friend</h1>
        <Chessboard id="BasicBoard" 
        onPieceDragEnd={(piece,sourceSquare)=>{changeChess(piece,sourceSquare)}}
        //onPieceDrop={(sourceSquare, targetSquare,piece)=>{changeChess(sourceSquare, targetSquare,piece)}}
        />
        <h1>{joke}</h1>
      </div>
    </div>
   );
}
 
export default Friend;


