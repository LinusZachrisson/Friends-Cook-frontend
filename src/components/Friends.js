import React, { useEffect, useState } from 'react';
import UserPage from './UserPage';

function Friends(prop) {
    let [friends, setFriends] = useState();
    let [friendProfile, setFriendProfile] = useState();

    // Hämta användare
    useEffect(() => {
        fetch('https://cook-and-friends.herokuapp.com/users/getusers')
            .then((resp) => resp.json())
            .then((data) => {
                setFriends(data);
            });
    }, []);

    // Fånga användarnamnet som klickats på
    const onClick = (e) => {
        setFriendProfile(e.target.innerText);
    };

    const GoBack = () => {
        setFriendProfile(undefined);
    };

    if (friends === undefined) {
        return <div className='aside-container loading'>Loading...</div>;
    } else if (friendProfile) {
        return (
            <div className='friends-container'>
                <button onClick={GoBack}>Back</button>
                <UserPage user={friendProfile} myLikes={prop.myLikes} />
            </div>
        );
    } else {
        return (
            <div className='friends-container'>
                <h3>Dina vänner</h3>
                {friends.map((friend) => (
                    <div className='friend-container'>
                        <div
                            key={friend._id}
                            onClick={onClick}
                            className='friend-con-name'
                        >
                            {friend.username}
                        </div>
                        <div>
                            <button>Avfölj</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Friends;
