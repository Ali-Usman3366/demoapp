import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(<>
    {/* <!-- Footer --> */}
<hr/>
{/* <!-- Footer Elements --> */}
<div className="w-100">
<h3 className="folo">Follow Us</h3>
</div>
<div className="containerjack">
  <Link className="an" to="">
    <i className="fab fa-2x fa-facebook-f"></i>
  </Link>
  <Link className="an" to="">
    <i className="fab fa-2x fa-twitter"></i>
  </Link>
  <Link className="an" to="">
    <i className="fab fa-2x fa-instagram"></i>
  </Link>
  <Link className="an" to="">
    <i className="fab fa-2x fa-youtube"></i>
  </Link>
  
</div>
{/* <!-- Footer Elements --> */}

{/* <!-- Copyright --> */}
<footer className="nav-bg">
<div className="footer-copyright text-center py-3 text-light ">© 2021 Copyright: DreamMovies.com
</div>
{/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --> */}


    </>)
}
export default Footer;