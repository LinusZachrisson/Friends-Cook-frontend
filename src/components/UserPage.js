import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

const UserPage = (prop) => {
    const [likedRecepies, setLikedRecepies] = useState([]);
    console.log(prop);
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
                console.log(recepies);
                setLikedRecepies(recepies);
            });
    }, []);

    return (
        <div className='profile-container'>
            <p>
                Gillade recept av <span> {prop.user}</span>
            </p>
            <div className='profile-liked-rec-container'>
                {likedRecepies.map((food, index) => {
                    return (
                        <div key={index} className='profile-recipe-con'>
                            <a href={"https://www.ica.se/recept/" + food.Id} target="_blank">
                            <img src={food.ImageUrl} alt='Food of recepie' />
                            </a>
                            {' '}
                            {/* <a href={"https://www.ica.se/recept/" + food.Id}>
                                <img src={food.ImageUrl} alt="Bilden kunde inte laddas" />
                            </a> */}
                            <h4>{food.Title}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UserPage;
