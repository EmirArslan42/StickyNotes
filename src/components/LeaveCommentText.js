import React from "react";

const LeaveCommentText = ({position}) => {
  return (
    <div
      style={{ position: "fixed", top: position.y, left: position.x }}
      className={`!fixed !top-${position.y} !left-${position.x} cursor-pointer`}
    >
      Yorum Yazmak İçin Tıkla
    </div>
  );
};

export default LeaveCommentText;
