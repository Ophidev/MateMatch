import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Body from "./components/Body"
import Login from "./components/Login"

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
