import styled from "styled-components";
import avatar from "/images/avatar.jpg";
import ToggleButton from "../../../ToggleButton/ToggleButton";
import "./profile.scss";
import ProfileFeed from "./profileFeed";
import { useContext } from "react";
import { UserContext } from "../../../../Context/Context";

const ProfileDisplay = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1em;
`;

export default function Profile() {
  const { userDetails } = useContext(UserContext);
  return (
    <ProfileDisplay>
      <div id="centerContainer">
        <div id="profileContainer">
          <h3 className="profile-text">Profile</h3>
          <div id="imageContainer">
            <img src={avatar} alt="avatar.jpg" />
            <div id="textContainer">
              <h3>{userDetails?.user?.username}</h3>
              <small>{userDetails?.user?.email}</small>
            </div>
          </div>
          <div id="followContainer">
            <p>
              0 <small>followers</small>
            </p>
            <p>
              0 <small>following</small>
            </p>
          </div>
          <div id="secondTextContainer">
            <p>
              {" "}
              {/* Debate team captain,400 level. Computer education,Faculty of
              education */}
            </p>
          </div>
          <div id="button">
            <ToggleButton text={"edit profile"} className={"post-btn"} />
            <ToggleButton text={"share profile"} className={"post-btn"} />
          </div>
        </div>
      </div>
      <div>
        <ProfileFeed />
      </div>
    </ProfileDisplay>
  );
}
