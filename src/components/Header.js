import '../App.css';
import ToggleTheme from './ToggleTheme';
import menuLight from '../assets/menu-light.png';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='heading'>Tharun Pirangi</h1>
            <nav className='navbar'>
                <ToggleTheme />
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li className='menuIcon'><img src={menuLight} alt="" /></li>
            </nav>
        </div>
    );
}
export default Header;