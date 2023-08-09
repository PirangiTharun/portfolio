import '../App.css';
import ToggleTheme from './ToggleTheme';
import menuLight from "../assets/menu-light.png";
import menu from '../assets/menu.png';
import cross from '../assets/cross.png';
import crossLight from '../assets/cross-light.png';

import { useState } from 'react';

const Header = ({menuExpanded, setMenuExpanded}) => {
    const selectedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(()=>{return selectedTheme || 'dark'});
    const handleMenuIcon = () => {
        setMenuExpanded(!menuExpanded);
    }
    return (
        <div className='header'>
            <h1 className='heading'>Tharun Pirangi</h1>
            <nav className='navbar'>
                <ToggleTheme theme={theme} setTheme={setTheme} />
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li className='menuIcon'>{
                    menuExpanded? <img onClick={handleMenuIcon} src={theme==='light'?cross: crossLight} alt="" />  :
                     <img onClick={handleMenuIcon} src={theme==='light'? menu: menuLight} alt="" />
                }</li>
            </nav>
        </div>
    );
}
export default Header;