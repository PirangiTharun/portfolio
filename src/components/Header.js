import '../App.css';
import ToggleTheme from './ToggleTheme';

const Header = () => {
    return (
        <div className='header'>
            <h1>Tharun Pirangi</h1>
            <nav className='navbar'>
                <ToggleTheme />
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </nav>
        </div>
    );
}
export default Header;