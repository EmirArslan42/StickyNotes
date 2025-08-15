"use client";
import React, { useRef, useContext } from "react";
import Draggable from "react-draggable";
import { MainContext } from "@/MainContext";

const Note = ({ note }) => {
  const nodeRef = useRef(null);
  const { mode, setMode, activeNotId, setActiveNotId } = useContext(MainContext);

  return (
    <Draggable  nodeRef={nodeRef} defaultPosition={{ x: note.position.x, y: note.position.y }}>
      <div
        onMouseEnter={() => setMode(false)}
        onMouseLeave={() => setMode(true)}
        ref={nodeRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: note.color,
          maxWidth: 300,
        }}
        className="note-container break-words"
      >
        <span
          onClick={() => setActiveNotId(prev => prev === note.number ? null : note.number)}
          style={{ backgroundColor: note.color }}
          className="note-box-number opacity-70 hover:opacity-100 text-white flex justify-center items-center absolute top-0 left-[50%] w-14 h-14 rounded-[50%]"
        >
          {note.number}
        </span>

        {activeNotId === note.number && (
          <div
            className="note py-3 px-6 rounded-[4px] text-white"
            style={{ backgroundColor: note.color }}
          >
            {note.note}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Note;

