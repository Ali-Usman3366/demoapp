import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import Idata from "./Idata";
const Indian=()=>{
    function Indata(val) {
 return (<Card
    imgsrc= {val.imgscr}
    sname= {val.sname}
    link= {val.link}/>)}
    
    return(<>
    <Navbar/>
    <div className="container-fluid movies">
    {Idata.map(Indata)}</div>
    <Footer/>
    </>
    )
}
export default Indian;