import English from './English';
import South from './South';
import Punjabi from './Punabi';
import Home from './Home';
import Indian from './Indian';
import React from "react";
import {Routes,Route} from "react-router-dom";
const App = ()=>{
    return(<>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/English" element={<English/>} />
    <Route path="/South" element={<South/>} />
    <Route path="/Punjabi" element={<Punjabi/>} />
    <Route path="/Indian" element={<Indian/>} />

  </Routes>
  
</>);
}
export default App;