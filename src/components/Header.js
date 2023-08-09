import '../App.css';
import ToggleTheme from './ToggleTheme';
import menuLight from "../assets/menu-light.png";
import menu from '../assets/menu.png';
import { useEffect, useState } from 'react';

const Header = () => {
    const selectedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(selectedTheme);
    useEffect(()=>{
        setTheme(selectedTheme);
    },[selectedTheme])
    return (
        <div className='header'>
            <h1 className='heading'>Tharun Pirangi</h1>
            <nav className='navbar'>
                <ToggleTheme />
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li className='menuIcon'><img src={theme==='light'? menu: menuLight} alt="" /></li>
            </nav>
        </div>
    );
}
export default Header;