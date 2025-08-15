"use client";
import LeaveCommentText from "@/components/LeaveCommentText";
import { useEffect, useRef, useState } from "react";
import { MainContext } from "@/MainContext";
import Note from "@/components/Note";
import NoteBox from "@/components/NoteBox";
import Draggable from "react-draggable";

export default function Home() {
  const screenRef = useRef(null);
  useEffect(() => {
    screenRef.current.focus(); // ekran ilk açıldığında otomatik olarak focus olması için ayarladım ..
  }, []);

  const [notes, setNotes] = useState([]);

  // Tarayıcıda çalışırken localStorage'dan oku
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // notes değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [mode, setMode] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);
  const [activeNotId, setActiveNotId] = useState(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0,
  });

  const [boxVisible, setBoxVisible] = useState(false);
  const handleKeyUp = (e) => {
    if (e.key == "Escape") {
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

  const handleClick = (noteId) => {
    if (mode) {
      setBoxPosition({
        x: position.x,
        y: position.y,
      });
      //alert(boxPosition.x + "," + boxPosition.y)
      setBoxVisible(true);
      setNoteVisible(!noteVisible);
    }
  };

  const data = {
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible,
    noteVisible,
    setNoteVisible,
    activeNotId,
    setActiveNotId,
    handleClick,
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
        <div className="w-full flex justify-center p-7 text-2xl bg-blue-600 text-white">
          <span className="text-green-400">Yapışkan Notlar -</span> Not bırakma
          modülünü açmak için ESC tuşuna basınız
        </div>
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col"><img
            className="object-cover"
            src="https://img3.stockfresh.com/files/r/rafalstachura/m/84/2705946_stock-photo-colourful-adhesive-notes.jpg"
            alt=""
          />
          <img
            className="object-cover"
            src="https://img3.stockfresh.com/files/r/rafalstachura/m/84/2705946_stock-photo-colourful-adhesive-notes.jpg"
            alt=""
          /></div>
          <div><img
            className="object-cover"
            src="https://img3.stockfresh.com/files/r/rafalstachura/m/84/2705946_stock-photo-colourful-adhesive-notes.jpg"
            alt=""
          />
          <img
            className="object-cover"
            src="https://img3.stockfresh.com/files/r/rafalstachura/m/84/2705946_stock-photo-colourful-adhesive-notes.jpg"
            alt=""
          /></div>
          <div><img
            className="object-cover"
            src="https://img3.stockfresh.com/files/r/rafalstachura/m/84/2705946_stock-photo-colourful-adhesive-notes.jpg"
            alt=""
          />
          <img
            className="object-cover"
            src="https://img3.stockfresh.com/files/r/rafalstachura/m/84/2705946_stock-photo-colourful-adhesive-notes.jpg"
            alt=""
          /></div>
        </div>
        {mode && <LeaveCommentText />}
        {notes &&
          notes.map((note) => {
            return (
              <Note
                vis={noteVisible}
                key={note.number + Math.random()}
                note={note}
              />
            );
          })}

        {boxVisible && <NoteBox />}
      </div>
    </MainContext.Provider>
  );
}
