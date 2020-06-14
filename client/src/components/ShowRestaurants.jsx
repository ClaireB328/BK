import React from 'react'
import {Link} from 'react-router-dom'
import './ShowRestaurants.css'

export default function ShowRestaurants(props) {
    const { restaurants } = props;
    return (
        <>
            <hr />
            <h3>Restaurants</h3>
            {
                restaurants.map(restaurant => (
                    <React.Fragment key={restaurant.id}>

                    <div className="all-restaurants"> 
                        {/* {restaurant.id}  */}
                        <Link className="restaurants" to={`/restaurants/${restaurant.id}`}>
                        <div className="rest-name">{restaurant.name}</div>
                        <div className="rest-loc">{restaurant.location} </div>
                        <img className="restaurant-image" src={restaurant.imgURL} /> 
                        </Link>
                        {/* <div className="rest-description">{restaurant.description}</div> */}
                    </div>
                    </React.Fragment>
                    
                ))
            }
            <br />
        <Link to='/new/restaurant'><button>CREATE</button></Link>
        </>
    )
}

