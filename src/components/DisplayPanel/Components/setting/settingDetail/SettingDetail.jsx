import React from "react";
import contact from "/images/contact.png";
import key from "/images/key.png";
import heart from "/images/heart.png";
import upload from "/images/upload.png";
import arrow from "/images/icon1.svg";
import "./settingdetail.scss";

function SettingDetail({settingname,MainData}) {
  const displaySetting = MainData.map((data) => {
    return (
      <div id="second_main_container">
        <img src={data.icon} alt={data.icon} />
        <div>
          <h3>{data.name}</h3>
          <p>{data.text}</p>
        </div>
        <img id="arrow_icon" src={data.image} alt={data.image} />
      </div>
    );
  });

  return (
    <div>
      <section id="setting_detail_container">
        <div>
          <div id="detail_first_container">
            <h3>{settingname}</h3>
          </div>
          <div id="detail_second_container">{displaySetting}</div>
        </div>
      </section>
    </div>
  );
}

export default SettingDetail;

