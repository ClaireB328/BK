import React from 'react'
import {Link} from 'react-router-dom'

export default function ShowRestaurants(props) {
    const { restaurants, currentUser, destroyRestaurant } = props;
    return (
        <>
            <hr />
            <h3>Restaurants</h3>
            {
                restaurants.map(restaurant => (
                    <React.Fragment key={restaurant.id}>

                    <p> {restaurant.id} 
                        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                        {restaurant.location} 
                        {restaurant.imgURL}  
                        {restaurant.description}
                    </p>
                    {/* {
                        currentUser && currentUser.id === restaurant.user_id && (
                            <>
                            <button>Edit</button>
                            <button onClick={() => destroyRestaurant(restaurant.id)}>Delete</button>
                            </>
                        )
                    } */}
                    </React.Fragment>
                    
                ))
            }
            <br />
        <Link to='/new/restaurant'><button>CREATE</button></Link>
        </>
    )
}

