import React from "react";
import {
  BackgroundColorButton,
  TextButton,
} from "../../components/sharedComponents/CustomButton/Button";
import { companies, textContent } from "../../constants/homePage";
import {
  BottomCard,
  ProgressBarCard,
  ThreeIconCard,
  TopCard,
} from "../../components/pageComponents/HomePage/Card/Card";
export const TextImage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5%",
        padding: "18px 0px",
        alignItems: "center",
      }}
    >
      <div style={{ width: "32%", paddingLeft: "60px" }}>
        <TextButton
          styles={{
            color: "#000099",
            backgroundColor: "#F0F0F7",
            borderRadius: "24px",
          }}
          startIcon={"trophy"}
        >
          Trusted by 5,500+ Company
        </TextButton>
        <div
          style={{
            fontWeight: "500",
            fontSize: "28px",
            margin: "8px 0px 10px 0px",
            lineHeight: "48px",
          }}
        >
          <h2>
            {" "}
            Find the best <br />
            kasisolusi{" "}
            <span style={{ color: "#ee0000", textDecoration: "underline" }}>
              freelancer
            </span>
            <br />{" "}
            <span>
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src="/assets/homePage/person.svg"
                alt="person"
              />
            </span>{" "}
            right away
          </h2>
        </div>
        <div
          style={{
            color: "#303030",
            fontWeight: "500",
            fontSize: "14px",
            margin: "0px 0px 10px 0px",
          }}
        >
          To help the kasisolusi enterprenuers find out the best creative talents.
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <BackgroundColorButton>Get Started</BackgroundColorButton>
          <TextButton
            styles={{
              color: "#000099",
              border: "2px solid #E1E3E3",
              borderRadius: "24px",
            }}
            startIcon={"video"}
            endIcon={"rightArrow"}
          >
            Video Introduction
          </TextButton>
        </div>
        <div
          style={{
            color: "#303030",
            fontWeight: "500",
            fontSize: "14px",
            margin: "30px 0px 10px 0px",
          }}
        >
          Trusted by the best companies.
        </div>

        <div style={{ display: "flex", gap: "24px" }}>
          {companies &&
            companies.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px",
                    marginTop: "4px",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "30px" }}
                    src={`/assets/homePage/${item.url}.svg`}
                    alt={item.name}
                  />
                  <span style={{ fontWeight: "600", fontSize: "18px" }}>
                    {item.name}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      <div style={{ width: "50%", position: "relative" }}>
        <TopCard />
        <img src="/assets/homePage/team.svg" alt="team" />
        <BottomCard />
      </div>
    </div>
  );
};

export const ImageText = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        backgroundColor: "#F0F0F7",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          padding: "20px 0px 20px 10%",
          width: "30%",
        }}
      >
        <BackgroundColorButton>FOR TALENT</BackgroundColorButton>
        <h2
          style={{
            padding: "16px 0px 10px 0px",
            fontWeight: "400",
            fontSize: "40px",
          }}
        >
          Find great Work
        </h2>
        <p
          style={{
            fontSize: "16px",
            paddingTop: "4px",
            paddingBottom: "4px",
            color: "#5E5D5D",
          }}
        >
          Meet clients you're excited to work with and take
          <br /> your career or business to new heights.
        </p>

        <div style={{ padding: "20px 0px 20px 0px" }}>
          {textContent &&
            textContent.map((item, index) => {
              return (
                <TextButton
                  styles={{ paddingLeft: "0px" }}
                  startIconStyle={{ color: "#ff8c00" }}
                  startIcon={"rightArrowOrange"}
                >
                  {item.text}
                </TextButton>
              );
            })}
        </div>
        <div style={{ paddingTop: "12px", alignItems: "flex-end" }}>
          <TextButton
            styles={{
              color: "#000099",
              border: "2px solid #000099",
              borderRadius: "24px",
            }}
            endIcon={"rightArrow"}
          >
            Learn more
          </TextButton>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          maxHeight: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <ThreeIconCard
          heading={"Senior UI/UX Desinger"}
          content={"Adidas Group, Ltd"}
          firstIcon={"bolt"}
          secondIcon={"location"}
          thirdIcon={"payment"}
        />
        <img
          style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
          src="/assets/homePage/boyAndGirl.svg"
          alt="teamImage"
        />
      </div>
    </div>
  );
};

export const OvalImage = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F0F0F7",
        alignItems: "center",
        padding: "50px 0px 0px 0px",
      }}
    >
      <div style={{ width: "50%", position: "relative", marginLeft: "0px" }}>
        <div>
          <ProgressBarCard/>
        </div>
        <div
          style={{
            width: "85%",
            height: "500px",
            padding: "0px",
            background: "hsla(0, 0%, 93%, 1)",
            backgroundImage:
              "linear-gradient(90deg, hsla(0, 0%, 93%, 1) 9%, hsla(233, 67%, 74%, 1) 100%)",
            backgroundColor: "red",
            borderRadius: "0px 200px 200px 0px",
            marginBottom: "80px",
            position: "relative",
          }}
        >
          <img
            style={{
              position: "absolute",
              left: "195px",
              bottom: "0px",
              width: "500px",
              height: "100%",
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            src="/assets/homePage/prayer.svg"
            alt="gradient"
          />
        </div>
      </div>
      <div style={{ width: "38%", marginBottom: "80px" }}>
        <BackgroundColorButton>FOR BUSINESS</BackgroundColorButton>
        <h2
          style={{
            padding: "16px 0px 10px 0px",
            fontSize: "40px",
            fontWeight: "400",
          }}
        >
          Why the business turn <br /> into Kasisolusi
        </h2>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              gap: "2px",
              height: "40px",
            }}
          >
            <TextButton
              styles={{ paddingLeft: "0px", fontSize: "22px", padding: "0px" }}
              startIconStyle={{ color: "#ff8c00" }}
              startIcon={"doubleSideArrow"}
            ></TextButton>
            <div style={{ fontWeight: "600", marginLeft: "0px" }}>
              PROOF OF QUALITY
            </div>
          </div>
          <div style={{ fontSize: "14px", color: "#5E5D5D" }}>
            Check any pro's work samples, client reviews, and identify <br />
            verification.
          </div>
          <div
            style={{
              margin: "10px 0px 0px 0px",
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              gap: "2px",
            }}
          >
            <TextButton
              styles={{ paddingLeft: "0px", fontSize: "22px", padding: "0px" }}
              startIconStyle={{ color: "#ff8c00" }}
              startIcon={"doubleSideArrow"}
            ></TextButton>
            <div style={{ fontWeight: "500", marginLeft: "0px" }}>
              SAFE AND SECURE
            </div>
          </div>
          <div style={{ fontSize: "14px", color: "#5E5D5D" }}>
            Focus on your work knowing we help protect your data <br /> and
            privacy. We're here with 24/7 support if you need it.
          </div>
        </div>
        <div style={{ marginTop: "20px", alignItems: "flex-end" }}>
          <TextButton
            styles={{
              color: "#000099",
              border: "2px solid #000099",
              borderRadius: "24px",
            }}
            endIcon={"rightArrow"}
          >
            Learn more
          </TextButton>
        </div>
      </div>
    </div>
  );
};
