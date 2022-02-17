import React from "react";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Bmi from "./pomponents/Bmi";
import Calc from "./pomponents/Calc";
import Grade from "./pomponents/Grade";
import Login from "./pomponents/Login";

const App = () =>{
return (
        <div>
          <Router>
          <Routes>
            <Route expected path="/" element={<Home/>}/>
            <Route path="/bmi" element={<Bmi/>}/>
            <Route path="/calc" element={<Calc/>}/>
            <Route path="/grade" element={<Grade/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          </Router>
        </div>
      )
}

export default App;