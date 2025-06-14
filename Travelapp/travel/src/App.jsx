import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './Components/mainpage'
import Login from './Components/login'
import Register from './Components/register'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
