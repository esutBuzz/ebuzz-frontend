import styled from "styled-components";
import searchIcon from '/images/charm_search.png';
import addicon from '/images/addIcon.png';
import com1 from '/images/community1.png';
import com2 from '/images/community2.png';
import com3 from '/images/community3.png';
import com4 from '/images/community4.png';
import faces from '/images/faces.png';
import ToggleButton from "../../../ToggleButton/ToggleButton";
import './communities.scss'
const CommunitiesDisplay = styled.main`
    position: relative;
    width: 100%;
    padding: 1em;
    height: 100%;
`
const communityFolder =[

  {
    image: com1,
    avatar:faces,
    text:'Faculty of law',
    buttonText:"Join",
    communityNumbers: 385,
  },
  {
    image: com2,
    avatar:faces,
    text:'Mass communication',
    buttonText:"Join",
    communityNumbers: 345,
  },
  {
    image: com3,
    avatar:faces,
    text:'Education debate team',
    buttonText:"Join",
    communityNumbers: 378,
  },
  {
    image: com4,
    avatar:faces,
    text:'Faculty of engineering',
    buttonText:"Join",
    communityNumbers: 315,
  },

]
const communityContent = communityFolder.map((main)=>{
    return(
            <div id="third_inner_container">
              <div>
                <img className="image" src={main.image} alt="community-image" />
              </div>
              <div className="third_inner_container">
                <h4>{main.text}</h4>
                <div id="avatar_container"><img src={main.avatar} alt="avatar"/><p>{main.communityNumbers} members</p></div>
                <ToggleButton 
                text={main.buttonText}
                className={'post-btn'}
                />
              </div>
            </div>
    )
})
export default function Communities() {
  return (
    <CommunitiesDisplay>
       <section id="community_section">
        <div id="First_container">
            <h3>
              Communites
            </h3>
        </div>
        <div id="second_container">
          <div>
            <img src={searchIcon} alt="search_icon" />
            <input type="text" placeholder="Discover communites" />
          </div>
        </div>
        <div id="third_container">
          {communityContent}
        </div>
        <div id="fourth_container">
          <img src={addicon} alt="add_icon" />
          <h4>Add new community</h4>
        </div>
       </section>
    </CommunitiesDisplay>
  )
}
