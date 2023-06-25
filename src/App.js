import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './pages/Home'
import About from './pages/About'

function App(){

return(
<BrowserRouter>

<div>
    <div >
        <NavBar />
    </div>

    <Routes>
    <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About />} />
            
       
    </Routes>

</div>

</BrowserRouter>
);
}
export default App;