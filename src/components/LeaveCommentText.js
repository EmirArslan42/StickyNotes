import React from "react";
import { MainContext } from "@/MainContext";
import { useContext } from "react";
const LeaveCommentText = () => {
  const { position } = useContext(MainContext);
  return (
    <div
      style={{
        position: "fixed",
        top: position.y + 4,
        left: position.x + 12,
        cursor: "crosshair",
        transform:"translateY(-60%)"
      }}
      className="bg-[#333] text-[#fff] py-1.5 px-3 text-sm opacity-70 rounded-[4px]"
    >
      <p>Yorum Bırakmak İçin Tıkla</p>
    </div>
  );
};

export default LeaveCommentText;
