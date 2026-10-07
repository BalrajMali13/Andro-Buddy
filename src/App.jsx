import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/header'
import HomePage from './components/homePage'
import Sidebar from './components/sidebar'

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <HomePage />
      </div>
      
    </>
  )
}

export default App
