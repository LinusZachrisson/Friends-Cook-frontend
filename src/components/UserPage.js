import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

const UserPage = (prop) => {
    const [likedRecepies, setLikedRecepies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/readall`)
            .then((res) => res.json())
            .then((data) => {
                let recepies = [];
                for (let i in data) {
                    if (data[i].LikedBy.includes(prop.user)) {
                        recepies.push(data[i]);
                    }
                }
                setLikedRecepies(recepies);
            });
    }, []);

    return (
        <div className='profile-container'>
            <h3>Mina gillade recept</h3>
            <div className='profile-liked-rec-container'>
                {likedRecepies.map((food, index) => {
                    return (
                        <div key={index} className='profile-recipe-con'>
                            <img src={food.ImageUrl} alt='Food of recepie' />{' '}
                            <h4>{food.Title}</h4>
                            <BiTrash className='remove-icon' />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UserPage;
