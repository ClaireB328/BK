import React from 'react'
import {Link} from 'react-router-dom'
import './ShowRestaurants.css'

export default function ShowRestaurants(props) {
    const { restaurants } = props;
    return (
        <div className="main-page">
            <Link className="create-button" to='/new/restaurant'><button>CREATE</button></Link>
           <h2 className="app-description">Please select a restaurant and leave a review</h2>
           
            <div className="rest-list">
            {
                restaurants.map(restaurant => (
                    <React.Fragment key={restaurant.id}>

                    <div className="all-restaurants"> 
                    
                        <Link className="restaurants" to={`/restaurants/${restaurant.id}`}>
                        <div className="rest-name">{restaurant.name}</div>
                        <div className="rest-loc">{restaurant.location} </div>
                        <img className="restaurant-image" src={restaurant.imgURL} alt="restaurant" /> 
                        </Link>
                    
                    </div>
                    </React.Fragment>
                    
                ))
            }
          
        </div>
        </div>
    )
}

