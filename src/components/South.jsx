import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";
const South=()=>{
    
    
    return(<>
    <Navbar/>
    <div className="container-fluid movies">
    {Sdata.map((val)=> {
 return (<Card
    imgsrc= {val.imgscr}
    sname= {val.sname}
    link= {val.link}/>)})}</div>
    <Footer/>
    </>
    )
}
export default South;