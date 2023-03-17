import { Chessboard } from "react-chessboard";

import './Friend.scss';

const Friend = () => {
  return ( 
    <div className="chess-board">
      <h1>Play a Friend</h1>
      <Chessboard id="BasicBoard" />
    </div>
   );
}
 
export default Friend;


