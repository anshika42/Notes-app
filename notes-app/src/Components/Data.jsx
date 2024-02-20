import React, { useState } from "react";
import "../Style.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Data = () => {
  const [open, setOpen] = useState(true);
  const [colorGroupChoice, setColorGroupChoice] = useState(false);
  const [colorChoice, setColorChoice] = useState(false);
  const [createGroup, setCreateGroup] = useState({
    id: 0,
    groupName: "",
    color: "",
    create: false,
  });

  const { id, groupName, color, create } = createGroup;
  // const [userIdClicked, setUserIdClicked] = useState(0);

  const handleUserIdClicked = (id) => {
    setUserIdClicked(id);
  };
  const handleNotesChange = (e) => {
    setCreateGroup({ ...createGroup, groupName: e.target.value });
    setColorGroupChoice(true);
  };

  //submit

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (colorChoice == true && groupName != "") {
      setCreateGroup({ ...createGroup, create: true });
      console.log("submitted")
    }
  };

  // color filter

  const funColor1 = () => {
    setCreateGroup({ ...createGroup, color: "#B38BFA" });
    setColorChoice(true);
  };
  const funColor2 = () => {
    setCreateGroup({ ...createGroup, color: "#FF79F2" });
    setColorChoice(true);
  };
  const funColor3 = () => {
    setCreateGroup({ ...createGroup, color: "#43E6FC" });
    setColorChoice(true);
  };
  const funColor4 = () => {
    setCreateGroup({ ...createGroup, color: "#F19576" });
    setColorChoice(true);
  };
  const funColor5 = () => {
    setCreateGroup({ ...createGroup, color: "#0047FF" });
    setColorChoice(true);
  };
  const funColor6 = () => {
    setCreateGroup({ ...createGroup, color: "#6691FF" });
    setColorChoice(true);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          window.location.reload();
        }}
        center={true}
      >
        <h2>Create New Group</h2>
        <form>
          <p>
            {" "}
            <span>Group Name </span>
            &nbsp; &nbsp;
            <input
              type="text"
              placeholder="Enter group name"
              onChange={(e) => handleNotesChange(e)}
            ></input>
            {groupName === "" ? (
              <p style={{ color: "red", fontSize: "10px" }}>
                Please Enter Group Name{" "}
              </p>
            ) : (
              ""
            )}
          </p>
          <p>
          <span>Choose Colour</span>
          &nbsp; &nbsp;
          <span>
            <button type="button" className="colorBtn1" onClick={funColor1}></button>&nbsp;
            <button type="button" className="colorBtn2" onClick={funColor2}></button>&nbsp;
            <button  type="button" className="colorBtn3" onClick={funColor3}></button>&nbsp;
            <button  type="button" className="colorBtn4" onClick={funColor4}></button>&nbsp;
            <button type="button" className="colorBtn5" onClick={funColor5}></button>&nbsp;
            <button type="button" className="colorBtn6" onClick={funColor6}></button>&nbsp;
          </span>
          </p>
          {colorChoice === false ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              Please choose the colour
            </p>
          ) : null}
          <button type= "submit"
          
            style={{
              background: "blue",
              borderRadius: "12px",
              padding: "10px",
              width: "content-cover",
              marginLeft: "29%",
            }}
            onClick={handleSubmit}
          >
            Create
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Data;
