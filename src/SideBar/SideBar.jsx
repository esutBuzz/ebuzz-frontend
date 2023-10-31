import React, { useContext, useState } from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import data from "../../data/SideNav.json";
import { UserContext } from "../Context/Context";
import logo from '/icons/ebuzz-logo.png'
import avatar from "/images/avatar.jpg";
import "./sidebar.scss";
import { useNavigate } from "react-router-dom";

function SideBar({ handle ,toggleDisplay}) {

  const { userDetails } = useContext(UserContext);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  function handleActive(index) {
    setActive(index);
  }
  function handleLogout() {
    sessionStorage.clear();
    navigate("/");
  }
  return (
    <menu id="sidenav">
    <img src={logo} alt="ebuzz logo" id="logo" />
      <nav>
        {data.map((items, index) => (
          <ToggleButton
            key={index}
            type="button"
            text={items.title}
            icon={items.icon}
            isActive={active === index}
            className={"side-btns"}
            onClick={() => {
            handleActive(index)
            handle(items.title)
            toggleDisplay(true)
            }}
          />
        ))}
      </nav>

      <ToggleButton
        icon={"fa-solid fa-arrow-right-from-bracket"}
        text={"Logout"}
        onClick={handleLogout}
        className={"log-btn"}
      />

      {/* user data which would me mapped and updated from the login component */}
      <aside>
        <img src={avatar} alt="user avatar" />
        <p>
          {userDetails?.user?.username}
          <small>{userDetails?.user?.email}</small>
        </p>
      </aside>
    </menu>
  );
}

export default SideBar;
