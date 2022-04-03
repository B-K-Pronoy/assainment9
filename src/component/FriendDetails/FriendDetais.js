import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetais = () => {
    const {friendId}=useParams();
    const [friend,setFriend]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        console.log(url); 
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <p>This is friend Details: {friendId}</p>
            <p> {friend.address.city}</p>
        </div>
    );
};

export default FriendDetais;