import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css'
import './components/navbar.css'
import { Home } from './pages/Home.js'
import { Login } from './pages/Login.js'
import { List } from './pages/List.js'
import { Register } from './pages/Register.js'
import { RegisterDelivery } from './pages/RegisterDelivery.js'
import { RegisterRest } from './pages/RegisterRest.js'
import { NavLinkComp } from "./components/NavLinkComp";
import { Profile } from "./pages/Profile";

const App = () => {
    return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register/user' element={<Register/>}></Route>
        <Route path='/register/delivery' element={<RegisterDelivery/>}></Route>
        <Route path='/register/restaurant' element={<RegisterRest/>}></Route>

        <Route path='/restaurantes' element={<List/>}></Route>
        <Route path='/usuario' element={<Profile/>}></Route>

      </Routes>
    </main>
  );
}

export default App;
