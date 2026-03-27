import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-3xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="img"
      />
      <RightCardContent tag={props.tag} num={props.num} color={props.color} />
    </div>
  );
};

export default RightCard;
