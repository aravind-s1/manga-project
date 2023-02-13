import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Info from './info'
import Chapter from './chapters'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/info' element={<Info />} />
      <Route path='/chapter' element={<Chapter />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
