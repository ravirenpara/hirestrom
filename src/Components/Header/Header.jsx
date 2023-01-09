import React from 'react'
import { useState } from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import logo from "../../PublicBar/Images/HireStrom.png"
const routes = [
  {
    path: "/",
    name: "Home",
    id: "Home"
  },
  {
    path: "/services",
    name: "Services",
    id: "services"
  },
  {
    path: "/browse-projects",
    name: "Browse Projects",
    id: "browse-projects"
  },
  {
    path: "/browse-employees",
    name: "Browse Employees",
    id: "browse-employees"
  },
  {
    path: "/blogs",
    name: "Blogs",
    id: "blogs"
  },

  {
    path: "/contact-us",
    name: "Contact Us",
    id: "contact-us"
  },

  // {
  //   path: "/login",
  //   name: "Login",
  //   id: "login"
  // },
  // {
  //   path: "/sign-up",
  //   name: "Sign Up",
  //   id: "sign-up"
  // },

]

function Header({ children }) {
  return (
    <>
    <div className="Public_Header container">
      <nav className='Navbar'>
        <div className="P_Header_block">

          <div className='Logo'>
            <img src={logo} alt="" />
          </div>
          <div className='Menu_List'>
            <ul className='Menu_Ul_List'>
              {routes.map((route) => (
                <li>
                  <NavLink to={route.path} key={route.name} className="link_is_" id={route.id} >
                    {route.name}
                  </NavLink>
                </li>

              ))}
              <Link to="/login" className='HS-Left-Mg'>
              <li>
                <button className='Login-btn'><a href="">Login</a></button>
              </li>
              </Link>
              <Link to="/sign-up">
                <li>
                  <button className='Sign-up-btn'><a href="">Sign Up</a></button>
                </li>
              </Link>
            </ul>
          </div>

        </div>
      </nav>
    </div>
   
    </>
  )
}

export default Header