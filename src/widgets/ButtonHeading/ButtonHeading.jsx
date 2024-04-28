import React from "react";
import { TextButton } from "../../components/sharedComponents/CustomButton/Button";
import { cardContent } from "../../constants/homePage";
import { Card } from "../../components/pageComponents/HomePage/Card/Card";

export const ButtonHeading = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextButton
        styles={{
          color: "#000099",
          backgroundColor: "#F0F0F7",
          borderRadius: "24px",
          margin: "40px auto 0px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        WHY KASISOLUSI
      </TextButton>
      <div
        style={{
          fontWeight: "300",
          fontSize: "40px",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>A new way to hire the best kasisolusi talent</p>
      </div>
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Once you gain access to the Kasisolusi platform you start out by adding
        your first team roles.
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {cardContent &&
          cardContent.map((item, index) => {
            return (
              <Card
                key={index}
                logo={item.icon}
                header={item.header}
                content={item.content}
              />
            );
          })}
      </div>
    </div>
  );
};

export const DoubleButtonHeading = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextButton
        styles={{
          color: "#000099",
          backgroundColor: "#F0F0F7",
          borderRadius: "24px",
          margin: "40px auto 0px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        FIND OUT JOB
      </TextButton>
      <div
        style={{
          fontWeight: "300",
          fontSize: "40px",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          Discover the best jobs and match <br />
          <span style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>with the client needs</span>
        </p>
      </div>
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#5E5D5D",
        }}
      >
        Discover the most jobs that client requested, apply and get the jobs
        quickly.
      </div >
      <div style={{display:"flex",justifyContent:"center",margin:"16px 0px"}}>
      <TextButton
        styles={{
          color: "#000099",
          border: "2px solid #E85C10",
          backgroundColor: "#F7ECE6",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-between",
          height: "35px",
        }}
      >
        <TextButton
          styles={{
            borderRadius: "24px",
            backgroundColor: "#E85C10",
            color: "#ffffff",
            margin: "-10px",
          }}
        >
          Find a Jobs
        </TextButton>
        <span
          style={{
            color: "#E85C10",
            wordBreak: "keep-all",
            margin: "8px",
            padding: "0px -5px 0px 0px",
          }}
        >
          Find a Talents
        </span>
      </TextButton>
      </div>
    </div>
  );
};