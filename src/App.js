import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import OtherPage from './pages/otherPage/OtherPage'
import UsersPage from './pages/usersPage/UsersPage'
import LoginPage from './pages/loginPage/LoginPage'
import NavBar from './components/navBar/NavBar'

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/other' element={<OtherPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
