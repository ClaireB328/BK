import React from 'react'
import {Link} from 'react-router-dom'

export default function ShowRestaurants(props) {
    const { restaurants } = props;
    return (
        <>
            <hr />
            <h3>Restaurants</h3>
            {
                restaurants.map(restaurant => (
                    <React.Fragment key={restaurant.id}>

                    <p> 
                        {restaurant.id} 
                        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
                        {restaurant.location} 
                        <img className="restaurant-image" src={restaurant.imgURL} /> 
                        {restaurant.description}
                    </p>
                    </React.Fragment>
                    
                ))
            }
            <br />
        <Link to='/new/restaurant'><button>CREATE</button></Link>
        </>
    )
}

