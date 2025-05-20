import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  SideMenu from './components/SideMenu/SideMenu';


function App() {
  

  return (
    <>
        <Router>
        <SideMenu />
        <Routes>
          <Route path="/proveedores" element={<Proveedores/>} />
          <Route path="/sucursales" element={<Sucursales/>} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Reviews" element={<Reviews />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
