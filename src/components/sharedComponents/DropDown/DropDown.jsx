import { useEffect, useRef, useState } from "react";
import { TextButton } from "../CustomButton/Button";
export const DropDown = ({text,dropdownItems
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef=useRef();
  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const buttonStyles=isDropdownOpen?{
    backgroundColor:"#eeeeee",
    borderTopLeftRadius:"8px",
    borderTopRightRadius:"8px",

  }:{}
  return (
    <div style={{position:"relative"}} ref={dropdownRef}>
      <TextButton clickHandler={handleButtonClick} endIcon={"downArrow"} styles={buttonStyles}>{text}</TextButton>
      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1,
            width:"100%",
            backgroundColor:"#eeeeee",
            borderTop:"1px solid #ffffff",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {dropdownItems.map((item, index) => (
              <li key={index} style={{ padding: "10px 0px",borderBottom:"1px solid #ffffff",textAlign:"center" }}>
                <a href="/google.com" style={{ textDecoration: "none", color: "black" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
