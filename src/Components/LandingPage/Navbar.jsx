// import {Link} from "react-router-dom";
import {BsCart2} from "react-icons/bs";
import {BiBookmarkHeart} from "react-icons/bi"
import "../styles/Navbar.css"
import{Link} from "react-router-dom"

export default function Navbar(){
  return (
    // main div
    <>
    <hr style={{padding:"0px",margin:"0px",border:"2px solid black",fontWeight:"20%"}}/>
    <div className="Navbar">
      
      {/* 1st div for image */}
      <div id="logo">
        <Link to="/">
           <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="error" />
        </Link>
      </div>
       {/* 2nd div for category */}
      <div id="category">
        <button>MEN</button>
        <button>WOMEN</button>
        <button>KIDS</button>
        <button>INDIE</button>
        <button>HOME AND KITCHEN</button>
      </div>


       {/* 3rd div for search and login */}
      <div>
        {/* login div */}
        <div className="signindiv" >
          <div  id="Link_none">
            <Link to = "signin" style={{textDecoration:"none"}}>Sign In</Link>
            <span> / </span>
            <Link to = "signup" style={{textDecoration:"none"}}>Sign Up</Link>
          </div>
          <span>Customer care</span>
          <span>VISIT AJIOLUXE</span>
        </div>
        {/* search div */}
        <div id="searchdiv" >

          <div id="searchbar">
            <input type="text" placeholder="Search AJIO"/>
            <button>Search</button>
          </div>

          <div style={{fontSize:"30px"}}>
          <BiBookmarkHeart/>
          </div>
          <div style={{fontSize:"30px"}}>

          <BsCart2/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}