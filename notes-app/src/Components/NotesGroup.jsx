import React from "react";

const NotesGroup = ({ key, color, groupName, colorId }) => {
  // console.log("length" ,groupName);
  // console.log(groupName[0])
  

  const NotesName = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    textTransform: "Capitalize",
  };

  const circle = {
    backgroundColor: color,
    width: "50px",
    height: "41px",
    borderRadius: "50%",
    fontSize: "140%",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    margin: "10px",
    textTransform:"uppercase",
    paddingTop:"11px "
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={circle}>
          {groupName[0]}
          {groupName[1]}
        </div>
        <div style={NotesName}>{groupName}</div>
      </div>
    </>
  );
};

export default NotesGroup;
