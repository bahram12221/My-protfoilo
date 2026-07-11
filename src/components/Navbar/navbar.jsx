import styled from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation()

  const isColor = location.pathname === "/" || location.pathname === "/service" || location.pathname === "/works"
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <h2 style={{color:"white", padding:"20px"}}>My <span style={{color:"orange"}}>Protfoilo</span></h2>
      <div className={styled.container}>
      <div className={styled.parent}>
        <div className={`${styled.humburger} ${isColor ? styled.color : ""}`} onClick={() => setOpen(!open)}>
          <i className="fas fa-bars"></i>
        </div>


        <ul className={open ? styled.visible : styled.navbar}>



          <li className={styled.li}>
            <NavLink
              style={{ textDecoration: "none", color: "lightgray" }}
              to="/"
              className={({ isActive }) => (isActive ? styled.activelink : "")}
            >
              INTRODACTION
            </NavLink>
          </li>




          <li className={styled.li}>
            <NavLink
              style={{ textDecoration: "none", color: "lightgray" }}
              to="/skills"
              className={({ isActive }) => (isActive ? styled.activelink : "")}
            >
              SKILLS
            </NavLink>
          </li>




          <li className={styled.li}>
            <NavLink
              style={{ textDecoration: "none", color: "lightgray" }}
              to="/works"
              className={({ isActive }) => (isActive ? styled.activelink : "")}
            >
              WORKS
            </NavLink>
          </li>




          <li className={styled.li}>
            <NavLink
              style={{ textDecoration: "none", color: "lightgray" }}
              to="/service"
              className={({ isActive }) => (isActive ? styled.activelink : "")}
            >
              SERVICES
            </NavLink>
          </li>




          <li className={styled.li}>
            <NavLink
              style={{ textDecoration: "none", color: "lightgray" }}
              to="/contact"
              className={({ isActive }) => (isActive ? styled.activelink : "")}
            >
              CONTACT{" "}
            </NavLink>
          </li>



        </ul>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
