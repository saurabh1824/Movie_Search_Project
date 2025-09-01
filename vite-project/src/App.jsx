

import Home from './pages/Home.jsx'
import {Routes, Route} from "react-router-dom"
import Favourite from './pages/favourite.jsx';
import NavBar from './components/NavBar.jsx';
import './css/App.css'

function App() {
  

  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
        
      </main>

      

    </>


  )
}

export default App
