import React,{useState} from 'react'
import Vector from "/images/icon1.svg";
import ToggleButton from '../components/ToggleButton/ToggleButton';
import searchIcon from '/images/charm_search.png';
import './middlesetting.scss';


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

export default function MiddleSetting({changeHand}) {


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
                changeHand(data.settingnName)
                ;}}          
              />
            </>
        )
      })
  return (
    <div>
    <section id="settingCon">
          <div>
            <h3>Settings</h3>
          </div>
          <div id="second_container">
          <div>
            <img src={searchIcon} alt="search_icon" />
            <input type="text" placeholder="Search settings" />
          </div>
        </div>
            <div id="Setting_info_container">
                {SettingsInfo}
            </div>
       </section>
    </div>
  )
}
