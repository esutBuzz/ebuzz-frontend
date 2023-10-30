import { useState } from 'react'
import { Link } from 'react-scroll'
import PageButton from '../../PageButton/PageButton'
import ToggleButton from '../../ToggleButton/ToggleButton'
import logo from '/icons/ebuzz-logo.png'
import './Navbar.scss'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function handleMenuOpen() {
        setToggleMenu(!toggleMenu);
    };

    return(
        <header>
            <ToggleButton
                icon={`fa-solid fa-${toggleMenu ? 'x' : 'bars'}`}
                onClick={handleMenuOpen}
                className='menu-btn'
            />
            
            <menu className={`menu ${toggleMenu ? 'activeMenu' : ''}`}>
                {NavItems.map((items, index) => (
                    <Link
                        key={index}
                        to={items.link}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='link'
                        activeClass='activeLink'
                    >
                        {items.name}
                    </Link>
                ))}
            </menu>

            <PageButton
                image={logo}
                className='logo'
                link='/'
            />

            <nav>
                {NavItems.map((items, index) => (
                    <Link
                        key={index}
                        spy={true}
                        smooth={true}
                        className='link'
                        activeClass='activeLink'
                        to={items.link}
                    >
                        {items.name}
                    </Link>
                ))}
            </nav>

            <aside>
                {UserAuth.map((items, index) => (
                    <PageButton
                        key={index}
                        title={items.name}
                        link={items.link}
                        className='user-btn'
                    />
                ))}
            </aside>
        </header>
    )
}

const NavItems = [
    { name: 'Features', link: 'features' },
    { name: 'Contact', link: 'contact' },
    { name: 'Help Centre', link: 'help' }
]

const UserAuth = [
    { name: 'Log in', link: '/login' },
    { name: 'Sign Up', link: '/signup' }
]