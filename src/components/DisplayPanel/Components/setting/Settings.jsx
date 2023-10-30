import styled from "styled-components";
import Vector from "/images/icon1.svg";
import './setting.scss';
import { Link } from "react-router-dom";
import ToggleButton from "../../../ToggleButton/ToggleButton";
import { useState } from "react";

const SettingsDisplay = styled.main`
position: relative;
width: 100%;
height: 100%;
`
const settingData =[
  {
    settingnName: "Your account",
    icon: Vector,
  },
  {
    settingnName: "Notifications",
    icon: Vector,
  },
  {
    settingnName: "Privacy and safety",
    icon: Vector,
  },
  {
    settingnName: "Language",
    icon: Vector,
  },
  {
    settingnName: "Display",
    icon: Vector,
  },
  {
    settingnName: "Accesibility",
    icon: Vector,
  },
  {
    settingnName: "Security and safety",
    icon: Vector,
  },
  {
    settingnName: "Resources",
    icon: Vector,
  },
]
export default function Settings({toggleDisplay}) {
  
  const [active , setActive]= useState(0)

  const SettingsInfo = settingData.map((data, index)=>{
    return(
      <>
            <ToggleButton
            key={index}
            text={data.settingnName}
            image={data.icon}
            type= 'button'
            isActive={active === index}
            className={'setting-btns'}
            onClick={()=>{
              setActive(index)
              toggleDisplay(false)
              ;}}          
            />
          </>
      )
    })

  return (
    <SettingsDisplay>
       <section id="setting_container">
          <div>
            <h3>Settings</h3>
          </div>
            <div id="Setting_info_container">
                {SettingsInfo}
            </div>
       </section>
    </SettingsDisplay>
  )
}
