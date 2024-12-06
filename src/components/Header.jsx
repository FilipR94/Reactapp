import React from 'react'
import Logotype from '../assets/images/icons/logo.svg'
import IconSignIn from '../assets/images/icons/icon-signin.svg'
import DarkModeSwitch from './DarkModeSwitch'


const Header = () => {

  return (
    <header>
        <nav className="main-navigation">               
         <div className="left-navigation">
             <a href="/">
             </a>
             <img src={Logotype} alt="App Logo" />
             <span className="logo-text">Silicon</span>                                    
             <a href="#" className="nav-link">Features</a>
             <a href="#" className="nav-link">Contact</a>
         </div>                  
         <div className="right-navigation">
                 <span>Dark Mode</span>
                      <DarkModeSwitch />  
                <a href="#" className="btn btn-primary btn-login">
                    <img src={IconSignIn} alt="Sign in Icon" />
                    <span>Sing in / up</span>
                </a>
         </div>        
     </nav>        
 </header>
  )
}

export default Header

