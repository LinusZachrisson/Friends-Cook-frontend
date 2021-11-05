import React, { useEffect, useState } from "react";

function Friends() {
  let [friends, setFriends] = useState();
  let [friendProfile, setFriendProfile] = useState();

  // Hämta användare
  useEffect(() => {
    fetch("http://localhost:4000/users/getusers")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setFriends(data);
      });
  }, []);

  // Fånga användarnamnet som klickats på
  const onClick = (e) => {
    console.log(e.target.innerText);
    setFriendProfile(e.target.innerText);
  };

  if (friends === undefined) {
    return <div className="aside-container loading">Loading...</div>;
  } else if (friendProfile) {
    return <div>{friendProfile}</div>;
  } else {
    return (
      <div>
        {friends.map((friend) => (
          <div key={friend._id} onClick={onClick}>
            {friend.username}{" "}
            {/* Här kan vi köra componenten för en användares profil och skicka med friendProfile-statet */}
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
