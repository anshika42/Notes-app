import React from 'react'


const AllNotes = ({item,userIdClicked}) => {

    const Time = {
        fontSize:"1rem",
        fontWeight:"400",
        fontStyle:"normal",
        marginLeft:"50%",
      
    }
    const TDate ={
        fontWeight: 400,
        fontStyle:"normal",
        marginLeft:"5%",
   
    }

    const notesStyle={
       color:"#000",
       fontWeight:400,
       fontFamily:"Roboto",
       fontStyle:"normal",
       fontSize:"1.5rem",
       lineHeight: "160.188%",
    //    padding:"px"
    paddingLeft:"10px"
   
    }
    const {id , notes,time,date} = item;
   
  return (
    userIdClicked === id ?(
    <div style={{margin:"2%", color:"#000" ,  borderRadius: "1rem",
    background: "#f7ecdc",}}>
      <div style={notesStyle}>
        <div>{notes}</div>
      </div>
      <div style={{display:"flex", }}>
        <div style={Time}>{time}</div>
        <div style={TDate}>{date}</div>
      </div>
    </div>): ""
  )
}

export default AllNotes
