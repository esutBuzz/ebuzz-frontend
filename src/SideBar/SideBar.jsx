import React from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import data from "../../data/SideNav.json";
import icon from '/images/icon.svg';
import avatar from '/images/avatar.jpg';
import "./sidebar.scss";
function SideBar({handle}) {
  return (
    <div>
      <menu id="sidenav">
        <div id="logo_component">
            <img src={icon} alt="E-BUZZ" />
            <h1>
                E-BUZZ
            </h1>
        </div>

        <div>
            <nav>
                {data.map((items, index) => (
                    <ToggleButton
                    key={index}
                    type="button"
                    text={items.title}
                    icon={items.icon}
                    // isActive={active === index}
                    className={"side-btns"}
                    onClick={() => {
                        // handleActive(index)
                        handle(items.title)
                    }}
                    />
                ))}
                </nav>
        </div>

       <div>
        <ToggleButton
            icon={"fa-solid fa-arrow-right-from-bracket"}
            text={"Logout"}
            // onClick={handleLogout}
            className={"log-btn"}
            />
       </div>

        {/* user data which would me mapped and updated from the login component */}
        <div id="lower_container"> 
            <aside>
            <img src={avatar} alt="user avatar" />
            <p>
                Obi Wan
                <small>@jediobiwan</small>
            </p>
            </aside>
        </div>
      </menu>
    </div>
  );
}

export default SideBar;
