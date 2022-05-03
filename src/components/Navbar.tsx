import '../styles/navbar.css';
import burger from '../images/burger.png';
import logo from '../images/logo.png';
import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";


export const Navbar = () => {
    const [navbarMenu, setNavbarMenu] = useState(true);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        //we are getting width of our screen
        const resize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", resize);

        resize();

        return () => window.removeEventListener('resize', resize);

    }, [])

    useEffect(() => {
        if(width > 800) {
            setNavbarMenu(true);
        } else {
            setNavbarMenu(false);
        }
    }, [width])

    return (
        <nav className='navbar__container'>
            <div className='navbar__header'>
                <Link to='/'><img src={logo} alt="Logo of Crypto app"/></Link>
                <h2>Crypto</h2>
                <img className='burger__button' onClick={() => setNavbarMenu(!navbarMenu)} src={burger} alt="menu icon"/>
            </div>

            {navbarMenu && <div className='navbar__nav-links'>
                <ul>
                    <li> 💲
                        <NavLink to='/'>Currencies</NavLink>
                    </li>
                    <li> 🗞️
                        <NavLink to='/news'>News</NavLink>
                    </li>
                </ul>
            </div>
            }
        </nav>
    )
}