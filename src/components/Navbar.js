import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/mylogo.gif";
import fire from '../firebase'
import { useHistory } from "react-router";
import { Avatar } from "@material-ui/core";
export default function Navbar (){
  const [checkUser , setCheckUser] = useState()
  const [open , setOpen] = useState(false)
  function handleToggle ()  {
    setOpen(!open );
  };
  useEffect(() => {
    authListener()
    }, [])
  
    function authListener(){
      fire.auth().onAuthStateChanged((user)=>{
        if(user){
          setCheckUser(true)
        
        }
        else{
          setCheckUser(false)
        }
      })
    }
    let history = useHistory()
    const logOut=()=>{
      fire.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      history.push('/')
      }
      function profile(){
        history.push('/profile')
      }
      
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img height='70' width='100' src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={open ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            {checkUser===false ? 
            <li>
              <Link to="/login">Login</Link>
            </li>:
            <>
             <li>
             <Link onClick={logOut}>Logout</Link>
           </li>
            <Avatar style={{cursor:'pointer'}} onClick={profile} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </>
            }
          
           
          </ul>
        </div>
      </nav>
    );
  
}
