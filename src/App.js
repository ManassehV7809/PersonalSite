import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './NavBar';
import Home from './pages/Home'
import About from './pages/About'
import { Helmet } from 'react-helmet';


function App(){

return(
    <>
<Helmet>
        <meta name="description" content="This is Vusani Radzilani's personal website." />
        <meta name="keywords" content="Vusani Radzilani, Vusani Manasseh, Vusani, Radzilani" />
      </Helmet>

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
</>
);
}
export default App;