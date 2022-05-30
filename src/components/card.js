import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ props, title,root }) => {
    let navigate = useNavigate();
  return (
    <div onClick={()=>{
        navigate(root)
    }} className="icon_card">
      <div className="department_card">
        <img src={props} alt="" />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Card;
