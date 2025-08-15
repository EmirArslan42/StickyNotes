"use client";
import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { useContext } from "react";
import { MainContext } from "@/MainContext";
const Note = ({ note }) => {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef(null); // nodeRef oluşturuldu
const {mode,setMode}=useContext(MainContext);
return ( <Draggable nodeRef={nodeRef} defaultPosition={{x:note.position.x,y:note.position.y}}>
        <div       onMouseEnter={() => setMode(false)}
      onMouseLeave={() => setMode(true)} ref={nodeRef} style={{ position: "absolute",top:0,left:0, backgroundColor:note.color,maxWidth:300 }} className="note-container break-words"> 
          <span onClick={()=>setVisible(!visible)} style={{ backgroundColor: note.color }}  className={`note-box-number opacity-70 hover:opacity-100 text-white flex justify-center items-center absolute top-0 left-[50%] w-14 h-14 rounded-[50%] `}>{note.number}</span>
      <div className="note py-3 px-6 rounded-[4px] text-white" style={{display : visible ? "block" : "none"}}>
        {note.note}
      </div>
    </div>
    </Draggable>
  );
};

export default Note;



