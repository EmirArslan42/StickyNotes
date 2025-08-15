"use client";
import LeaveCommentText from "@/components/LeaveCommentText";
import { useEffect, useRef, useState } from "react";
import { MainContext } from "@/MainContext";
import Note from "@/components/Note";
import NoteBox from "@/components/NoteBox"
import Draggable from "react-draggable";

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
  const [notes, setNotes] = useState([
    {
      note: "Bu bir test nottur.",
      number:1,
      color: "red",
      position: {
        x: 350,
        y: 300,
      },
    },
  ]);

  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0,
  });

  const [boxVisible, setBoxVisible] = useState(false);
  const handleKeyUp = (e) => {
    if (e.key == "c") {
      //console.log(`Warning comment mode is ${!mode == true ? "Active" : "Deactive"} !`);
          setMode(!mode);
    setBoxVisible(false);
    }

  };
  const handleMouseMove = (e) => {
    //console.log(e);
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleClick = (e) => {
    if(mode){
      setBoxPosition({
      x: position.x,
      y: position.y,
    });
    //alert(boxPosition.x + "," + boxPosition.y)
    setBoxVisible(true);
    }
  };

  const data = {
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible,
  };
  return (
    <MainContext.Provider value={data}>
      <div
        ref={screenRef}
        tabIndex={0}
        className={`screen ${
          mode && "editable"
        } fixed top-0 bottom-0 left-0 right-0 bg-[#ccc] w-full h-full`}
        onKeyUp={handleKeyUp}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSble-lOZXQZorJJ8zvdiY3h3C3v_Yo4IgslDjKsagij4sj5JrBz5CnhxLGAhAIyuxuG3Q&usqp=CAU"
          alt=""
        /> */}
        {mode && <LeaveCommentText />}
        {notes &&
          notes.map((note) => {
            return <Note key={note.number+Math.random()} note={note} />;
          })}

          {boxVisible && <NoteBox />}
      </div>
    </MainContext.Provider>
  );
}
