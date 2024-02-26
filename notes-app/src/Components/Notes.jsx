import React, { useState } from "react";
import AllNotes from "./AllNotes";

const Notes = ({ userIdClicked }) => {
  const storedDataString = localStorage.getItem("userInfo");
  const storedData = JSON.parse(storedDataString) || [];

  const [myNotes, setMyNotes] = useState({
    id: [],
    notes: [],
    time: [],
    date: [],
  });

  const [saveNotes, setSaveNotes] = useState(false);

  const groupName = storedData[userIdClicked - 1].groupName;
  const color = storedData[userIdClicked - 1].color;

  const content ={
    width:"67vw",
    height:"60vh",
    position:"fixed",
    overflowY : "scroll",
    padding:"3% 5%",
    padding:"1px"
}
  
  const circle = {
    backgroundColor: color,
    width: "50px",
    height: "40px",
    borderRadius: "50%",
    fontSize: "140%",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    margin: "10px",
    textTransform: "uppercase",
    paddingTop: "11px ",
  };

  const notesEnter ={
    backgroundColor:"#e8e8e8",
    position:"fixed",
    bottom:"0px",
    width:"70vw",
    height:"20vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
   
  }
 
  const notesInput ={
    fontSize:"1rem",
    fontWeight:400,
    lineHeight: "normal",
    // borderRadius:"20%",
    maxWidth:"75vw",
    maxHeight:"18vh",
    minWidth:"65vw",
    minHeight:"18vh",
    position:"absolute",
    
  }

  const button ={
    position:"absolute",
    right:"5%",
    bottom:"10%"
  }
 
  const resetTextarea = () => {
    setMyNotes({ ...myNotes, notes: "" });
  };
  const ExistingNotesString = localStorage.getItem("Notes");
  const ExistingNotes = JSON.parse(ExistingNotesString) || [];
  const saveMyNotes = () => {
    if (myNotes.notes !== "" && saveNotes === true) {
      ExistingNotes.push(myNotes);
      localStorage.setItem("Notes", JSON.stringify(ExistingNotes));
      // console.log(ExistingNotes);
    }
    resetTextarea();
  };

  const myNotesFunction = (e) => {
    // time
    const currentNotesDate = new Date();
    const newTimeWithSecond =
      currentNotesDate.getHours() + " : " + currentNotesDate.getMinutes();

    //  date
    const currentDate = new Date();
    const date = currentDate.getDate();
    const notesMonth = new Intl.DateTimeFormat("en-us", {
      month: "long",
    }).format(currentDate);

    const notesYear = currentDate.getFullYear();

    const notesDate = `${date} ${notesMonth} ${notesYear}`;

    setMyNotes({
      ...myNotes,
      id: userIdClicked,
      notes: e.target.value,
      time: newTimeWithSecond,
      date: notesDate,
    });
    // console.log(myNotes);
    setSaveNotes(true);
  };


  return (
    <>
      {userIdClicked > 0 ? (
        <div >
          <div
            className="NotesGroupHeading"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e8e8e8",
             width:"69.7vw",
              height:"77px",
            }}
          >
            <div style={circle}>
              {groupName[0]}
              {groupName[1]}
            </div>
            <div className="NotesName">{groupName}</div>
          </div>
          <br/>
        <div style={content}>

          {
          ExistingNotes.map((item)=>(
            <AllNotes item={item} userIdClicked={userIdClicked}/>
          ))
      }
        </div>
<br/>
          <div style={notesEnter}>
            <textarea
            style={notesInput}
              type="text"
              placeholder="Enter Your Text Here.."
              value={myNotes.notes}
              onChange={(e) => myNotesFunction(e)}
            />
            <img style={button}src="src\Image\Arrow.png" alt="Enter" onClick={saveMyNotes} />
          </div>
        </div>
      ) : (
        "no notes"
      )}
    </>
  );
};

export default Notes;
