import { Link } from 'react-router-dom';
import logo from '../../assets/logo/chessstation.svg';
import './Header.scss';

const Header = () => {
    return ( 
        <div className="header">
            <Link to={'/'}>
                <img src={logo} alt="ChessStation" className="header__logo" />
            </Link>
        </div>
     );
}
 
export default Header;