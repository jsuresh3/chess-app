import { Link, useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handPuzzlesClick = (event) => {
    navigate('/puzzles');
  }

  const handFriendClick = (event) => {
    navigate('/friend');
  }

  const handBotClick = (event) => {
    navigate('/bot');
  }


  return ( 
    <div className="home">
      <h1 className='title'>Welcome to ChessStation!</h1>
      <button className="home__puzzles-button" onClick={handPuzzlesClick}>Puzzles</button> <br />
      <button className="home__friend-button" onClick={handFriendClick}>Play a Friend</button> <br />
      <button className="home__bot-button" onClick={handBotClick}>Play a Bot</button>
     
    </div>
    );
}
 
export default Home;