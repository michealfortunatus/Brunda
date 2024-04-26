import React, {useState} from 'react'
import Styles from "./Navbar.module.css"
import {getImageurl} from "../../utils"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={Styles.navbar}>
        <a  className = {Styles.title} href=''> Brunda</a>
        <div className={Styles.menu}>
            <img  className={Styles.menuBtn}  src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          } alt='menu-Btn'  onClick={() => setMenuOpen(!menuOpen)}/>

            <ul  className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}>
                
                <li>
                    <a href='#about'> About</a>
                </li>
                <li>
                    <a href='#experience'> Experience</a>
                </li>
                <li>
                    <a href='#projects'> Projects</a>
                </li>
                <li>
                    <a href='#contact'> Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar