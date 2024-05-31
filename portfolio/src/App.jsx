import { useState } from 'react'
import './App.css'
import Index from "./views/Index.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Bolt from "./components/Index/SnakeGame/Bolt.jsx";
import SnakeGame from "./components/Index/SnakeGame.jsx";
import Blur from "./components/Index/Blur.jsx";

function App() {
  return (
    <>
        <Index />
    </>
  )
}

export default App
