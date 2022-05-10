import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import Portfolio from '../pages/Portfolio'
import Event from '../pages/Event'

const Router = () => {
  return (
      <BrowserRouter>
          <Nav />
          <Routes>
              <Route path='/' element={ <Home />}/>
              <Route path='/home' element={ <Home />}/>
              <Route path='/resume' element={ <Resume />}/>
              <Route path='/portfolio' element={ <Portfolio />}/>
              <Route path='/blog' element={ <Blog />}/>
              <Route path='/event' element={ <Event />}/>
              <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default Router