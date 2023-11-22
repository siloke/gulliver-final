import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cidade from "./screens/Cidade.jsx"
import Home from "./screens/Home.jsx"


function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cidade/:id" element={<Cidade />}></Route>
            <Route path="*" element={<><h1>Not Found</h1></>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
