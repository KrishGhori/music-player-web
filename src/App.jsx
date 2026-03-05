import './App.css'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Playlist from './Pages/Playlist'
import Search from './Pages/Search'
import Like from './Pages/Like'
import Nav from './Components/Nav'
function App() {


  return (
   
   <BrowserRouter>
   <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/like' element={<Like/>}/>
      <Route path='/playlist' element={<Playlist/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>

   </BrowserRouter>
  )
}

export default App
