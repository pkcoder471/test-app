import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import Information from "./components/Information/Information"
import Guide from "./components/Guide/Guide"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/information' element={<Information/>}/>
      <Route exact path='/guide' element={<Guide/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
