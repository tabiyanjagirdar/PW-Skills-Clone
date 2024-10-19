import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar'

import Contactus from './Pages/Contact'
import Head from './Components/Head'
import Products from './Components/Products'
import Foot from './Components/Foot'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
const Home = () => <h1></h1>;



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
   <div className='overflow-x-hidden'>
   <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Handle 404 - Not Found */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
    
    <Head/>
    <Products/>
    <Foot/>
    </Router>
   </div>
  
    </>
  )
}

export default App
