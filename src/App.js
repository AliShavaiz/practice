import "./App.css";
import Reducers from "./components/Reducers";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {Context} from "./components/Context";



function App() {
  return (
    <div >
      <h1 className="text-center">  </h1>
      {/* <Reducers/> */}
      <Context>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
