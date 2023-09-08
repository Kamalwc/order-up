import { Routes, Route } from "react-router-dom"
import LandingPage from "./LandingPage/LandingPage"
import {Menu} from "./Menu/Menu"

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
  );
}

export default App;