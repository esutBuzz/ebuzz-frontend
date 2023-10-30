import React from "react";
import styled from "styled-components";
import SettingDetail from "../components/DisplayPanel/Components/setting/settingDetail/SettingDetail";
import { AccountData, NotificationData, PrivateData } from "./FieldData";

const SideSettingStyle = styled.section`
    margin: 20px auto;
    width:100%;
`;

export default function SideSetting({ changeHandler }) {
  return (
    <SideSettingStyle>
      {changeHandler === "Your account" && <SettingDetail  settingname="Your account" MainData={AccountData}/>}
      {changeHandler === "Notifications" && <SettingDetail settingname="Notifications" MainData={NotificationData}/>}
      {changeHandler === "Privacy and safety" && <SettingDetail settingname= "Privacy and safety" MainData={PrivateData}/>}
    </SideSettingStyle>
  );
}
