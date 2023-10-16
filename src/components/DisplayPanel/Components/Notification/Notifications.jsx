import styled from "styled-components";
import './notification.scss';
import dummypics from "/images/pics.png"
import male from '/images/male.png';
import female from '/images/female.png';
import { flushSync } from "react-dom";

const NotificationsDisplay = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
`
const dummyFolder = [
  {
    profileImage : dummypics,
    noteText : "Fuzzy liked your feed"
  },
  {
    profileImage : female,
    noteText : "Mary liked your feed"
  },
  {
    profileImage : male,
    noteText : "John  added you as friend"
  },
  {
    profileImage : dummypics,
    noteText : "Pablo liked your feed"
  },  
  {
    profileImage : female,
    noteText : "Chika commented on your post"
  },
  {
    profileImage : male,
    noteText : "Chika liked your feed"
  }, 
  {
    profileImage : dummypics,
    noteText : "Kalu share a feed with you"
  },           
]

const displaynotification = dummyFolder.map((folder)=>{
  return (
    <div id="main">
        <img src={folder.profileImage} alt="avatar" />
        <p>{folder.noteText}</p>
    </div>

  )
})
export default function Notifications() {
  return (
    <NotificationsDisplay>
      <section id="mainSection">
          <div id="firstDiv">
            <h3>
              Notifications
            </h3>
          </div>
          <div id="secondDiv">
              {displaynotification}
          </div>
      </section>
    </NotificationsDisplay>
  )
}

