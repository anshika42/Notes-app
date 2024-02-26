import React, { useEffect } from "react";
import NotesGroup from "./NotesGroup";

const LeftSlider = ({
  color,
  id,
  groupName,
  create,
  handleClick,
  handleUserIdClicked,
}) => {
  // console.log(groupName.split(" "));
  // console.log(groupName ,color,create);
  const storedDataString = localStorage.getItem("userInfo");
  const storedData =   JSON.parse(storedDataString) || [] ;
  const newId = storedData.length>0 ? storedData[storedData.length -1].id+1 :1;
  // console.log(newId);
   const newData = {
    id: newId,
    groupName: groupName,
    color: color , 
    create : create
   }
  const submitCheck = () => {
    if (create === true && groupName !== "") {
      return true;
    } else return false;
  };
  useEffect(()=>{
    if(submitCheck()){
      storedData.push(newData);
      localStorage.setItem("userInfo" , JSON.stringify(storedData));

    }
  },[groupName, create, newData]);
  return (
    <>
      <div
        style={{
          width: "30vw",
          border: "1px solid #FFFFFF",
          height: "95.5vh",
          overflowY: "scroll",
         
          overflowX:"hidden"
        }}
      >
        <h1 style={{ fontSize: "140%", margin: "10vh" }}>Pocket Notes</h1>
        <button
          onClick={() => handleClick(true)}
          style={{
            borderRadius: "63px",
            background: "blue",
            width: "4vw",
            color: "white",
            fontSize: "43px",
            marginLeft:"75%",
            marginTop:"-7%",
           marginBottom:"2%"
            
          }}
        >
          +
        </button>
       
        <br/>
      <div>
      {
        storedData.map((item)=>(
          <NotesGroup key={item.id} color={item.color} groupName={item.groupName} colorId = {item.id}/>
        ))
      }
      </div>
      </div>
     
      
    </>
  );
};

export default LeftSlider;
