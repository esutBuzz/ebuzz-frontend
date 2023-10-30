import React,{useState} from "react";
import SideBar from "../SideBar/SideBar";
import styled from "styled-components";
import MiddleSetting from "./MiddleSetting";
import SideSetting from "./SideSetting";

const SettingStyleDisplay = styled.section`
  border: 1px solid red;
  display: flex;
`;

function SettingBody() {
  const [changeHandler, setChangeHandler] = useState("Your account")
  const changeHand = (data)=>{
    setChangeHandler(data);
  }
  return (
    <div>
      <SettingStyleDisplay>
        <SideBar />
        <MiddleSetting changeHand={changeHand}/>
        <SideSetting changeHandler={changeHandler} />
      </SettingStyleDisplay>
    </div>
  );
}

export default SettingBody;
