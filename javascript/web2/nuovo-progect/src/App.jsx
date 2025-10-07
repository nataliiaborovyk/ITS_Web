import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCrud from './Components/UserCrud'
import UserCrud1 from './Components/UserCrud1'
import Saluto from './compiti/Saluto'
import CardUtente1 from './compito_estate/esercizio_2/CardUtente1'
import MenuRistorante from './compito_estate/esercizio_3/MenuRistorante'
import Termostato from './compito_estate/esercizio_4/Termostato'
import TodoApp from './compito_estate/todolist/TodoApp'
import MainComponent from './compito_estate/useContext/MainComponent'


function App() {


  return (
    <>
    <div className = "container pu-3">

      {/* <TodoApp></TodoApp> */}
      <MainComponent></MainComponent>
    </div>

    </>
  )
}

export default App
