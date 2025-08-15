"use client";
import React, { useState } from "react";
import { MainContext } from "@/MainContext";
import { useContext } from "react";
const NoteBox = () => {
  const types = [
    {
      name: "comment",
      color: "red",
      text: "Yorum",
    },
    {
      name: "private-comment",
      color: "#999",
      text: "Gizli Yorum",
    },
    {
      name: "note",
      color: "orange",
      text: "Not",
    },
  ];

  const { position, boxPosition, setMode, notes, setNotes,setBoxVisible } =
    useContext(MainContext);
  const [color, setColor] = useState(types[0].color);
  const [note, setNote] = useState("");

  const addNote = (e) => {
    const currentNote = {
      note: note,
      number: notes.length + 1,
      color: color,
      position: {
        x: boxPosition.x,
        y: boxPosition.y,
      },
    };
    setNotes([...notes, currentNote]);
    setBoxVisible(false);
  };
  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div
      className="note-box w-[300px] p-5 bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.4)] "
      style={{ position: "absolute", top: boxPosition.y, left: boxPosition.x }}
      onMouseEnter={() => setMode(false)}
      onMouseLeave={() => setMode(true)}
    >
      <span
        style={{ backgroundColor: color }}
        className={`note-box-number opacity-70 hover:opacity-100 text-white flex justify-center items-center absolute top-0 left-[50%] w-10 h-10 rounded-[50%] `}
      >
        {notes.length + 1}
      </span>
      <select
        style={{ backgroundColor: color }}
        onChange={changeColor}
        className={`appearance-none rounded-[3px] w-full h-10 px-3 text-white text-[16px] font-semibold cursor-pointer outline-0`}
      >
        {types.map((type) => {
          return (
            <option key={type.name} value={type.color}>
              {type.text}
            </option>
          );
        })}
      </select>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full mt-3 p-3 border border-solid border-[#ccc] rounded-[3px] resize-none focus:border-[#000]"
        cols={30}
        rows={5}
      ></textarea>
      <button
        onClick={addNote}
        disabled={!note}
        className={`add-btn w-full h-10 rounded-[4px] mt-1 cursor-pointer bg-black text-white text-[15px] disabled:opacity-20 !disabled:pointer-default`}
      >
        Ekle
      </button>
    </div>
  );
};

export default NoteBox;
