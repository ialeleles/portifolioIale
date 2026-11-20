import { useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Arsenal from './pages/Arsenal'
import Projetos from './pages/Projetos'
import Experiencias from './pages/Experiencias'
import Footer from './components/Footer'

function App() {
  return (
        <>
            <Header />
            
            <main className="conteudo">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/projetos' element={<Projetos />} />
                    <Route path='/arsenal' element={<Arsenal />} />
                    <Route path='/experiencias'element={<Experiencias />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App;