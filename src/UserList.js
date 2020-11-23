import React, { useEffect } from 'react';

function User({user}) {

    return(
        <div>
            <b>{user.username} {user.email}</b>
        </div>    
    )
}

function UserList({users}) {

     
    
    return(
        <div>
            {users.map(
                user => <User user={user} key={user.id}/>
            )}
        </div>
    )
}

export default UserList;