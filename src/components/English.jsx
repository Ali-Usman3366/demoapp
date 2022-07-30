import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Edata from "./Edata";
import Footer from "./Footer";
const English=()=>{
    function Engdata(val) {
 return (<Card
    imgsrc= {val.imgscr}
    sname= {val.sname}
    link= {val.link}/>)}
    
    return(<>
    <Navbar/>
    <div className="container-fluid movies">
    {Edata.map(Engdata)}</div>
    <Footer/>
    </>
    )
}
export default English;