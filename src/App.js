import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { Outlet } from 'react-router-dom';

function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <div className='container'>
      <Header menuExpanded={menuExpanded} setMenuExpanded={setMenuExpanded} />
      {menuExpanded && <Menu />}
      <Outlet />
    </div>
  );
}

export default App;
