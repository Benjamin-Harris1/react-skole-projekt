import React from "react"
import User from 

export default function User ({ id, name, username, email, age }){
    return (
        <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>{id}</div>
            <div style={{ marginRight: '10px' }}>{username}</div>
            <div style={{ marginRight: '10px' }}>{email}</div>
            <div>{age}</div>
        </div>
    );

function UserDataPage( id, user) {
    
    const userData = [
        { id: 1, username: 'User1', email: 'user1@example.com', age: 28 },
        { id: 2, username: 'User2', email: 'user2@example.com', age: 35 },
        { id: 3, username: 'User3', email: 'user3@example.com', age: 42 },
    ];

    return (
        <>
            <h1>Dette er brugerfladen</h1>
            {userData.map(user => (
                <User 
                    key={user.id} 
                    id={user.id} 
                    username={user.username} 
                    email={user.email} 
                    age={user.age} 
                />
            ))}
        </>
    );
}
}