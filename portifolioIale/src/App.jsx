import { useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Arsenal from './pages/Arsenal'

function App() {
  return (
        <>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/arsenal' element={<Arsenal />} />
            </Routes>
        </>
    )
}

export default App;