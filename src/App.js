import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Headbar from "./components/Headbar"
import Home from "./components/Home"
import Company from "./components/Company"
import Favorites from "./components/Favorites"

function App() {
  return (
    <BrowserRouter>
      <Headbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<Home />} />
        <Route path="/companies/:company" element={<Company />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
