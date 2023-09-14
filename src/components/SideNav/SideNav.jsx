import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import data from '../../../data/SideNav.json'
import ToggleButton from '../ToggleButton/ToggleButton'
import avatar from '/images/avatar.jpg'
import './SideNav.scss'

export default function SideNav({className}) {
    const [active, setActive] = useState(0)
    function handleActive(index){
        setActive(index)
    }

    const navigate = useNavigate()
    function handleLogout() {
        // the main function would be done using react-querry
        // localStorage.removeItem('token')
        navigate('/',{replace:true})
    }

    return(
        <menu id="sidenav" className={className}>
            <nav>
                {data.map((items, index) => (
                    <ToggleButton
                        key={index}
                        text={items.title}
                        icon={items.icon}
                        isActive={active === index}
                        className={'side-btns'}
                        onClick={() => handleActive(index)}
                    />
                ))}
            </nav>

            <ToggleButton
                icon={'fa-solid fa-arrow-right-from-bracket'}
                text={'Logout'}
                onClick={handleLogout}
                className={'log-btn'}
            />

            {/* user data which would me mapped and updated from the login component */}
            <aside>
                <img src={avatar} alt="user avatar" />
                <p>
                    Obi Wan
                    <small>@jediobiwan</small>
                </p>
            </aside>
        </menu>
    )
}