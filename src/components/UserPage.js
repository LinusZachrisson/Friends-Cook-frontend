import { useEffect, useState } from 'react';

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
        <div>
            <h1>{prop.user} </h1>

            <h1>Liked recepies</h1>
            <ul>
                {likedRecepies.map((food, index) => {
                    return (
                        <li key={index}>
                            {' '}
                            <h1>{food.Title}</h1>{' '}
                            <img src={food.ImageUrl} alt='Food of recepie' />{' '}
                            <p>
                                Liked by...<button>Unlike</button>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UserPage;
