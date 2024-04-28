import React from "react";

const Clip = () => {
  return (
    <div style={{ position: "relative", marginTop: "20px" }}>
      <div
        style={{
          position: "absolute",
          top: "-16px",
          zIndex: 100,
          left: "50%",
          transform: "translateX(-50%)",
          right: "50%",
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          backgroundColor: "#4B52B3",
        }}
      >
        <img src="/assets/homePage/direction.svg" alt="adnan" />
      </div>
      <div
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          width: "97.5%",
          height: "200px",
          backgroundColor: "#00006c",
          margin: "auto",
        }}
      >
        abc
      </div>
      <div
        style={{
          width: "100%",
          height: "250px",
          backgroundColor: "#00006c",
          borderTopRightRadius: "24px",
          borderTopLeftRadius: "24px",
          fontSize: "30px",
          textAlign: "center", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5 style={{ marginTop:"-20px",padding: "-10px 10px 0px 10px",color:"#ffffff",fontSize:"35px",fontWeight:"400" }}>
          We offers a wide range of features that are <br />
          specifically designed to help teams 
          <span style={{color:"#ee0000"}}>
            {" "}stay organized
            <br />
            and productive,
          </span>{" "}
          such as task assignments,file
          <br />
          sharing, and chat grouping.
        </h5>
      </div>
    </div>
  );
};

export default Clip;
