"use client";
import LeaveCommentText from "@/components/LeaveCommentText";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const screenRef = useRef(null);
  useEffect(() => {
    screenRef.current.focus(); // ekran ilk açıldığında otomatik olarak focus olması için ayarladım ..
  }, []);
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const handleKeyUp = (e) => {
    if (e.key == "c") {
      //console.log(`Warning comment mode is ${!mode == true ? "Active" : "Deactive"} !`);
    }
    setMode(!mode);
  };
  const handleMouseMove = (e) => {
    //console.log(e);
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };
  return (
    <div
      ref={screenRef}
      tabIndex={0}
      className="screen fixed top-0 bottom-0 left-0 right-0 "
      onKeyUp={handleKeyUp}
      onMouseMove={handleMouseMove}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSble-lOZXQZorJJ8zvdiY3h3C3v_Yo4IgslDjKsagij4sj5JrBz5CnhxLGAhAIyuxuG3Q&usqp=CAU"
        alt=""
      />
        <LeaveCommentText position={position}/>
      {mode && <div>Comment mode is active !</div>}
    </div>
  );
}
