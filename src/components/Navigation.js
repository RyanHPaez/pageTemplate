import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      
          
            <h1 className="NavName font-weight-light">New App</h1>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item-home">
                  <NavLink className="nav-link" to="/Home">
                    <i className="fas fa-home" style={{ fontSize: "18px" }}></i>
                    <span className="sr-only">(Home)</span>
                  </NavLink>
                </li>

                <li className="nav-item-home">
                  <NavLink className="nav-link" to="/Page2">
                    <i className="fas fa-home" style={{ fontSize: "18px" }}></i>
                    <span className="sr-only">(Page2)</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        
      
  );
}

export default Navigation;
