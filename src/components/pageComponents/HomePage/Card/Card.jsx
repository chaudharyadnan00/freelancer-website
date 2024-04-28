import React from "react";
import "./Card.css";
import { TextButton } from "../../../sharedComponents/CustomButton/Button";
import { Person } from "../../../../constants/homePage";
export const TopCard = () => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    position: "absolute",
    top: "40px",
    left: "-5%",
    backgroundColor: "#ffffff",
  };

  const titleStyle = {
    fontSize: "18px",
    marginBottom: "8px",
  };

  const textStyle = {
    fontSize: "18px",
    color: "#555",
  };

  return (
    <div
      style={{
        ...cardStyle,
        display: "flex",
        gap: "24px",
        alignItems: "center",
        lineHeight: "20px",
      }}
    >
      <img src="/assets/homePage/currency.svg" alt="currency" />
      <div>
        <h2 style={titleStyle}>Total Income</h2>
        <p style={textStyle}>Rs.10000000</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#64E35D",
          backgroundColor: "#E6F7E6",
          borderRadius: "16px",
          padding: "4px 4px",
          fontSize: "16px",
        }}
      >
        <img src="/assets/button/topArrow.svg" alt="topArrow" />
        <div>15.45%</div>
      </div>
    </div>
  );
};
export const BottomCard = () => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
  };

  const titleStyle = {
    fontSize: "18px",
    marginBottom: "8px",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#555",
  };

  return (
    <div
      style={{
        ...cardStyle,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        right: "10px",
        bottom: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <img
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src="/assets/homePage/dp.jpg"
          alt="dp"
        />
        <div style={{ lineHeight: "20px" }}>
          <h2 style={titleStyle}>Mario Ramadhan</h2>
          <p style={textStyle}>Software Developer</p>
        </div>
        <div
          style={{
            width: "30%",
            padding: "6px 0px",
            backgroundColor: "#ff8c00",
            borderRadius: "8px",
            color: "#ffffff",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ padding: "2px 1px" }}>Follow Me</span>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#D4D9D9",
          marginTop: "8px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
          fontWeight: "400",
          fontSize: "16px",
          gap: "10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "90%",
              height: "4px",
              backgroundColor: "#D4D9D9",
              marginBottom: "4px",
            }}
          ></div>
          <div style={{ fontSize: "14px" }}>Success Job</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "90%",
              height: "4px",
              backgroundColor: "#D4D9D9",
              marginBottom: "4px",
            }}
          ></div>
          <div style={{ fontSize: "14px" }}>Rating and Review Jobs</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "90%",
              height: "4px",
              backgroundColor: "#D4D9D9",
              marginBottom: "4px",
            }}
          ></div>
          <div style={{ fontSize: "15px" }}>Rate/hour</div>
        </div>
      </div>
    </div>
  );
};
export const Card = ({ logo, header, content }) => {
  return (
    <div class="card" style={{ marginTop: "30px" }}>
      <div class="card-header">
        <img src={`/assets/homePage/${logo}.svg`} alt="Icon" />
      </div>
      <div class="card-header">
        <h2>{header}</h2>
      </div>
      <div class="card-content">
        <p>{content}</p>
      </div>
      <TextButton
        styles={{ color: "#000099", marginLeft: "-16px" }}
        endIcon={"rightArrow"}
      >
        Learn More
      </TextButton>
    </div>
  );
};
export const ThreeIconCard = ({
  styles,
  heading,
  content,
  firstIcon,
  secondIcon,
  thirdIcon,
}) => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #dddddd",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        marginBottom: "20px",
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: "4px",
        left: "30px",
        ...styles,
      }}
    >
      <div style={{ margin: "16px 0px 0px 20px" }}>
        <p style={{ fontWeight: "600", fontSize: "16px" }}>{heading}</p>
      </div>
      <div style={{ margin: "0px 0px 20px 20px" }}>
        <p style={{ color: "#5E5D5D", fontSize: "12px" }}>{content}</p>
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          border: "none",
          borderTop: "3px solid #ccc",
          width: "92%",
          margin: "auto",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0px 20px 0px",
          padding: "0px 10px 0px 10px",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1px",
          }}
        >
          <img src={`/assets/homePage/${firstIcon}.svg`} alt="bolt" />
          <p>Fulltime</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1px",
          }}
        >
          <img src={`/assets/homePage/${secondIcon}.svg`} alt="location" />
          <p>Onsite</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <img src={`/assets/homePage/${thirdIcon}.svg`} alt="" payment />
          <p>$3,456,00</p>
        </div>
      </div>
    </div>
  );
};
export const ProgressBarCard = () => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #dddddd",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        marginBottom: "20px",
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: "250px",
        left: "70px",
        zIndex: "100",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "16px 0px -5px 16px",
        }}
      >
        <img src="assets/button/star.svg" alt="star" />
        <img src="assets/button/star.svg" alt="star" />
        <img src="assets/button/star.svg" alt="star" />
        <img src="assets/button/star.svg" alt="star" />
        <img src="assets/button/star.svg" alt="star" />
      </div>
      <div style={{ margin: "16px 0px 0px 20px" }}>
        <p style={{ fontWeight: "600", fontSize: "16px" }}>
          UI/UX Design for Website
        </p>
      </div>
      <div style={{ margin: "0px 0px 10px 20px" }}>
        <p style={{ color: "#5E5D5D", fontSize: "12px" }}>
          In Progress - $15/hours
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            height: "8px",
            margin: "10px 0px 16px 0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "75%",
              backgroundColor: "#5555ee",
              borderRadius: "4px",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const NineCards = ({ cards }) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "40px 40px",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "24px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "8px",
    padding: "16px",
    width: "calc(33.33% - 16px)",
    boxSizing: "border-box",
    boxFlex: "0 0 auto",
    height: "240px",
  };

  const headerStyle = {
    fontWeight: "500",
    fontSize: "24px",
    padding: "1px 0px 0px 1px",
  };

  return (
    <div style={containerStyle}>
      {cards.map((card, index) => (
        <div key={index} style={cardStyle}>
          <div style={headerStyle}>{card.header}</div>
          <div style={{ color: "#5E5D5D", fontSize: "14px" }}>
            <p>{card.name}</p>
          </div>
          <div style={{ fontWeight: "600", padding: "20px 0px 5px 0px" }}>
            <p>{card.content}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "5px",
              fontSize: "12px",
              marginTop: "12px",
              border: "1px solid #000099",
              borderRadius: "24px",
              padding: "12px",
              backgroundColor: "#F0F0F7",
              height: "10px",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            <p>Fixed price</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: "20px",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
                src="/assets/homePage/business.svg"
                alt="business"
              />
              <span style={{ verticalAlign: "middle" }}>Est. budget $30</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: "20px",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
                src="/assets/homePage/clock.svg"
                alt="clock"
              />
              <span style={{ verticalAlign: "middle" }}>
                Posted 30 minutes ago
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ImageCard = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "36px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px 40px 0px 40px",
        }}
      >
        <div style={{ fontWeight: "400px", fontSize: "36px" }}>
          Trusted by leading brands and startups
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextButton
            startIcon={"leftArrow"}
            startIconStyle={{ width: "40px" }}
          ></TextButton>
          <TextButton
            startIcon={"arrowCircleRight"}
            startIconStyle={{ width: "80px" }}
          ></TextButton>
        </div>
      </div>
      <div>
        <div style={{ overflowX: "auto", marginLeft: "40px",marginTop:"20px",paddingBottom:"40px" }}>
          {Person.map((item, index) => (
            <div
              key={index}
              style={{ display: "inline-block", whiteSpace: "normal" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "stretch",
                  width: "450px",
                  backgroundColor: item.color,
                  borderRadius: "24px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  height: "300px",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    width: "60%",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "17px",
                        marginBottom: "20px",
                      }}
                    >
                      {`"${item.content}"`}
                    </div>
                  </div>
                  <div style={{ position: "relative", marginTop: "auto" }}>
                    <p style={{ fontWeight: "700", fontSize: "16px" }}>
                      {item.name}
                    </p>
                    <p style={{ fontWeight: "500", fontSize: "12px" }}>
                      {item.position}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    flex: "1",
                    height: "100%",
                    overflow: "hidden",
                    width: "20%",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img
                    src={`/assets/homePage/${item.image}.svg`}
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
