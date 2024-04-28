import React from "react";
import { TextButton } from "../../../sharedComponents/CustomButton/Button";
import {
  Clients,
  Company,
  DisplayImages,
  Talents,
} from "../../../../constants/homePage";

const Footer = () => {
  return (
    <div>
    <div
      style={{
        display: "flex",
        marginTop:"10px"
      }}
    >
      <div
        style={{
          margin: "0px 0px 10px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <TextButton
            styles={{
              fontSize: "36px",
              marginLeft: "-18px",
              fontWeight: "400",
              marginTop:"0px",paddingTop:"0px"
            }}
            startIcon={"mosque"}
            startIconStyle={{ width: "40px" }}
          >
            Kasisolusi
          </TextButton>
        </div>
        <div
          style={{
            color: "#5E5D5D",
            fontSize: "16px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            <br />
            laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginTop: "30px",
            marginBottom: "12px",
          }}
        >
          {DisplayImages &&
            DisplayImages.map((item, index) => {
              return (
                <img
                  key={index}
                  style={{ width: "36px" }}
                  src={`/assets/homePage/${item.logo}.png`}
                  alt={item.logo}
                />
              );
            })}
        </div>
      </div>
      <div style={{
          display: "flex",
          marginLeft:"300px",gap:"50px"
        }}>
        <div>
          <div style={{fontWeight:"500",fontSize:"20px"}}>For Clients</div>
          <div style={{marginTop:"10px"}}>
            {Clients &&
              Clients.map((item, index) => {
                return <div key={index} style={{fontSize:"16px",marginTop:"8px",color:"#5E5D5D",fontWeight:"400"}}>{item.name}</div>;
              })}
          </div>
        </div>
        <div>
          <div style={{fontWeight:"500",fontSize:"20px"}}>For Talents</div>
          <div>
            {Talents &&
              Talents.map((item, index) => {
                return <div key={index} style={{fontSize:"16px",marginTop:"8px",color:"#5E5D5D",fontWeight:"400"}}>{item.name}</div>;
              })}
          </div>
        </div>
        <div>
          <div style={{fontWeight:"500",fontSize:"20px"}}>Company</div>
          <div>
            {Company &&
              Company.map((item, index) => {
                return <div key={index} style={{fontSize:"16px",marginTop:"8px",color:"#5E5D5D",fontWeight:"400"}}>{item.name}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
    <div style={{borderTop: '2px solid #AFB3B3',
    width: '100%', 
    margin: '20px auto'}}></div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",margin:"10px 0px 10px 0px",color:"#5B5C5C"}}>
      <img src="/assets/homePage/copyright.svg" alt="copyright"/>
      <div>
        Copyright 2023 Hirings. All rights reserved.
      </div>
    </div>

    </div>
  );
};

export default Footer;
