import React from 'react'

function Profile(props) {
  return (
    <div className="container" > 
        
<h1 style={{fontFamily:'fantasy' , fontSize:'50px'}}> {props.user.fullName}</h1>
<h2 style={{marginTop:'30px',}}> {props.user.bio}</h2>
<h3 style={{ marginLeft:'340px', marginTop:'30px' , fontStyle:'italic', fontSize:'50px'}}>{props.user.profession}</h3>
    <button onClick={()=> props.handleName("Iram Hosny")}> click here to show the user_name
    </button>

     {props.children}
    </div>
  )
}

export default Profile