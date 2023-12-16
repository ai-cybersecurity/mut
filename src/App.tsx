import { Route, Routes } from "react-router-dom"

// components
import Footer from "./components/Footer"
import Home from "./components/Home"

// events
import Navbar from "./components/Navbar"
import Monday from "./events/Monday"
import Tuesday from "./events/Tuesday"
import Wednesday from "./events/Wednesday"
import Thuesday from "./events/Thuesday"
import Saturday from "./events/Saturday"
import Friday from "./events/Friday"


function App() {

  return (
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/monday" element={<Monday />}/>
          <Route path="/tuesday" element={<Tuesday />}/>
          <Route path="/wednesday" element={<Wednesday />}/>
          <Route path="/thuesday" element={<Thuesday />}/>
          <Route path="/friday" element={<Friday />}/>
          <Route path="/saturday" element={<Saturday />}/>
        </Routes>
        
        <Footer />
      </div>  
  )
}

export default App
