import styled from "styled-components";
import avatar from '/images/avatar.jpg'
import ToggleButton from "../../../ToggleButton/ToggleButton";
import './profile.scss';
import ProfileFeed from "./profileFeed";

const ProfileDisplay = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
`

export default function Profile() {
  
  return (
    <ProfileDisplay>
      <div id="centerContainer">
      <div id="profileContainer">
        <h3 className="profile-text">Profile</h3>
        <div id="imageContainer">
          <img src={avatar}alt="avatar.jpg" />
          <div id="textContainer">
            <h3>ObiWan Kenobi</h3>
            <small>@jediobiwan</small>
          </div>
        </div>
        <div id="followContainer">
          <p >300 <span>followers</span></p>
          <p>300 <span>following</span></p>
        </div>
          <div id="secondTextContainer">
           <p> Debate team captain,400 level.Computer 
           </p>
          </div>
          <div id="button">
          <ToggleButton
        text={'edit profile'}
        className={'post-btn'}

        />
        <ToggleButton
        text={'share profile'}
        className={'post-btn'}
        />
          </div>
      </div>
      </div>
      <div>
        <ProfileFeed/>
      </div>
    </ProfileDisplay>
  )
}
