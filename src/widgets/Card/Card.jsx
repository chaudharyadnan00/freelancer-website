import React from "react";
import { CardNine } from "../../constants/homePage";
import { ImageCard, NineCards } from "../../components/pageComponents/HomePage/Card/Card";
import { TextButton } from "../../components/sharedComponents/CustomButton/Button";

export const MultipleCards = () => {
  return (
    <div>
       <NineCards cards={CardNine} />
       <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"300",fontSize:"24px",marginBottom:"40px"}}>Did not find what you're looking for?<TextButton styles={{marginLeft:"-16px",color:"#000099",textDecoration:"underline" }} endIcon={"rightArrow"}>View all jobs</TextButton></div>
    </div>
  );
};
export const CardImage=()=>{
  return (<ImageCard/>);
}
