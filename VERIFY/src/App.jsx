import React from 'react'
import HomePage from './components/Homepage'
import {Route,Routes} from 'react-router-dom';
import SubmitNews from './pages/SubmitNews';
import Navbar from './components/Navbar';
{/* pages import section */}
import FactCheck from './pages/FactCheck';
import About from './pages/About';
import CommunityVoting from './pages/CommunityVoting';
const App = () => {
  return (
    <>
    <div>
    <Navbar />
    </div>
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/submit-news' element={<SubmitNews/>}/>
        <Route path='/fact-check' element={<FactCheck/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/community-voting' element={<CommunityVoting/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
