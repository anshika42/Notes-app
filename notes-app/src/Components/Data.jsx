import React, { useState } from "react";
import "../Style.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Notes from "./Notes";
import LeftSlider from "./LeftSlider";
import RightSlider from "./RightSlider"

const Data = () => {
  const [open, setOpen] = useState(false);
  const [colorChoice, setColorChoice] = useState(false);
  const [userIdClicked, setUserIdClicked] = useState(0);
  const [createGroup, setCreateGroup] = useState({
    id: 0,
    groupName: "",
    color: "",
    create: false,
  });
  const { id, groupName, color, create } = createGroup;

  const handleClick = (value) => {
    setOpen(value);
  };

  const handleUserIdClicked = (id) => {
    setUserIdClicked(id);
  };
  const handleNotesChange = (e) => {
    setCreateGroup({ ...createGroup, groupName: e.target.value });
  };
  const submitCheck = () => {
    if (colorChoice === true && groupName !== "") {
      return true;
    } else return false;
  };
  //submit

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (submitCheck() === true) {
      setCreateGroup({ ...createGroup, create: true });
      setOpen(false);
      
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
      <div style={{display:"flex"}}>
        {submitCheck() ? (
          <div>
            <LeftSlider
              color={color}
              id={id}
              groupName={groupName}
              create={create}
              handleClick ={handleClick}
              handleUserIdClicked={handleUserIdClicked}
            />
          </div>
        ) : (
          <div>
            <LeftSlider
              handleClick={handleClick}
              
            />
          </div>
        )}
        {userIdClicked > 0 ? (
          <div>
            <Notes userIdClicked={userIdClicked} />
          </div>
        ) : (
          <div >
            {" "}
            <RightSlider />
          </div>
        )}
      </div>

      {/* Modal */}

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          window.location.reload();
        }}
        center={true}
      >
        <h2>Create New Group</h2>
        <form action="">
          <p>
            {" "}
            <span>Group Name </span>
            &nbsp; &nbsp;
            <input
              type="text"
              placeholder="Enter group name"
              onChange={(e) => handleNotesChange(e)}
            ></input>
            {groupName === ""  ? (
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
              <button
                type="button"
                className="colorBtn1"
                onClick={funColor1}
              ></button>
              &nbsp;
              <button
                type="button"
                className="colorBtn2"
                onClick={funColor2}
              ></button>
              &nbsp;
              <button
                type="button"
                className="colorBtn3"
                onClick={funColor3}
              ></button>
              &nbsp;
              <button
                type="button"
                className="colorBtn4"
                onClick={funColor4}
              ></button>
              &nbsp;
              <button
                type="button"
                className="colorBtn5"
                onClick={funColor5}
              ></button>
              &nbsp;
              <button
                type="button"
                className="colorBtn6"
                onClick={funColor6}
              ></button>
              &nbsp;
            </span>
          </p>
          {colorChoice === false ? (
            <p style={{ color: "red", fontSize: "10px" }}>
              Please choose the colour
            </p>
          ) : ""}
          <button
            type="submit"
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
