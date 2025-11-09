import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import UserLayout  from './components/Layout/UserLayout';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
               <Routes path="/" element={<UserLayout />}></Routes>
               <Routes></Routes>


    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App

