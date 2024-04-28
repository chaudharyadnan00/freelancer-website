import React from "react";
import {
  BackgroundColorButton,
  TextButton,
} from "../../components/sharedComponents/CustomButton/Button.jsx";
import { DropDown } from "../../components/sharedComponents/DropDown/DropDown.jsx";
import { menu } from "../../constants/navbar.js";
export default function Navbar() {
  const clickHandler = () => {
    console.log("dfghjlk");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 60px 0 42px",
        }}
      >
        <div>
          <TextButton styles={{fontSize:"20px"}} startIcon={"mosque"} startIconStyle={{width:"30px"}} clickHandler={clickHandler}>
            Kasisolusi
          </TextButton>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {menu &&
            menu.map((item, index) => {
              return (
                <DropDown
                  key={index}
                  text={item.name}
                  dropdownItems={item.list}
                />
              );
            })}
          <TextButton>Enterprise</TextButton>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextButton clickHandler={clickHandler}>Log In</TextButton>
          <BackgroundColorButton clickHandler={clickHandler}>
            Sign In
          </BackgroundColorButton>
        </div>
      </div>
    </>
  );
}
