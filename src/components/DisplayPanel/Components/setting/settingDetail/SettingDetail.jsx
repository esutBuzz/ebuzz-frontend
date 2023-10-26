import React from "react";
import contact from "/images/contact.png";
import key from "/images/key.png";
import heart from "/images/heart.png";
import upload from "/images/upload.png";
import arrow from "/images/icon1.svg";
import "./settingdetail.scss";

function SettingDetail(className) {
  const displaySetting = settingData.map((data) => {
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
    <div className={className}>
      <section id="setting_detail_container">
        <div>
          <div id="detail_first_container">
            <h3>Your account</h3>
          </div>
          <div id="detail_second_container">{displaySetting}</div>
        </div>
      </section>
    </div>
  );
}

export default SettingDetail;

const settingData = [
  {
    name: "Your account",
    icon: contact,
    image: arrow,
    text: "Lorem ipsum dolor sit amet consectetur. Porta tellus diam sem",
  },
  {
    name: "Change password ",
    icon: key,
    image: arrow,
    text: "Lorem ipsum dolor sit amet consectetur. Porta tellus diam sem",
  },
  {
    name: "Download your data ",
    icon: upload,
    image: arrow,
    text: "Lorem ipsum dolor sit amet consectetur. Porta tellus diam sem",
  },
  {
    name: "Deactivate your account ",
    icon: heart,
    image: arrow,
    text: "Lorem ipsum dolor sit amet consectetur. Porta tellus diam sem",
  },
];
