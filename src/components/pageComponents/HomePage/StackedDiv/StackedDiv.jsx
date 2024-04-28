import React from "react";
import {
  BackgroundColorButton,
} from "../../../sharedComponents/CustomButton/Button";

const StackedDiv = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "50px",
    marginBottom: "50px",
  };

  const boxStyle = {
    width: "400px",
    height: "400px",
    borderRadius: "12px",
    marginTop: "-20px",
    backgroundColor: "#000067",
  };

  return (
    <div style={{position:"relative"}}>
      <div style={{ ...containerStyle}}>
        <div
          style={{
            ...boxStyle,
            marginTop: "24px",
            borderRadius: "12px 2px 12px 12px",
          }}
        ></div>
        <div
          style={{
            ...boxStyle,
            marginTop: "16px",
            marginLeft: "-6px",
            borderRadius: "12px 2px 12px 0px",
          }}
        ></div>
        <div
          style={{
            ...boxStyle,
            marginTop: "8px",
            marginLeft: "-6px",
            borderRadius: "12px 2px 12px 0px",
          }}
        ></div>
        <div
          style={{
            ...boxStyle,
            marginTop: "0px",
            marginLeft: "-6px",
            borderRadius: "12px 12px 12px 0px",
          }}
        ></div>
        
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position:"absolute",left:"25%",
          bottom:"25%"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "400",
            fontSize: "40px",
            color:"#ffffff"
          }}
        >
          Start looking for the best kasisolusi talent
        </div>
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight:"400",
            color:"#ee0000",fontSize:"24px"
          }}
        >
          <div>Get more sales and maximize the conversion rates, discover</div>
          <div>the most productive channels.</div>
        </div>
        <div style={{marginTop:"24px"}}>
          <BackgroundColorButton styles={{backgroundColor:"#64E35D"}}>Get Started</BackgroundColorButton>
        </div>
      </div>
    </div>
  );
};

export default StackedDiv;
