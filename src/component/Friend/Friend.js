import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
   
const{id,name,email}=props.friend;

const navigate = useNavigate();
const shoDetails =()=>{
       const path=`/friend/${id}`
       navigate(path);
   }

    return (
        <div>
           <p>My friend:  : {name} and his emaili is: {email} </p> 
           <Link to={`/friend/`+id}>Show Deatail</Link>
           <button onClick={shoDetails}> Chact Now {id}</button>
        </div>
    );
};

export default Friend;