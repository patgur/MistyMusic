import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './style/Navbar.css'
import logo from '../img/note.png'

function Navbar() {
    const [imgIcon, setImgIcon] = useState(false)
    
    const imgHandleClick = () => setImgIcon(!imgIcon)
    const closeMobileMenu = () => setImgIcon(false)


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div>
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <img src={logo} alt='logo' className='logo'/> 
                            Misty Music
                            <img src={logo} alt='logo' className='logo'/> 
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={imgHandleClick}>
                        <i className={imgIcon ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={imgIcon ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                                Strona główna
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/tutorial' className='nav-links' onClick={closeMobileMenu} >
                                Samouczek
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='/tablatures' className='nav-links' onClick={closeMobileMenu} >
                                Tabulatury
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/chords' className='nav-links' onClick={closeMobileMenu} >
                                Akordy
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar