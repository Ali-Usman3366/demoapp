import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Pdata from "./Pdata";
import Footer from "./Footer";
const Punjabi=()=>{
    function Punjdata(val) {
 return (<Card
    imgsrc= {val.imgscr}
    sname= {val.sname}
    link= {val.link}/>)}
    
    return(<>
    <Navbar/>
    <div className="container-fluid movies">{Pdata.map(Punjdata)}</div>
    <Footer/>
    </>
    )
}
export default Punjabi;