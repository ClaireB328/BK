import React from 'react'
import { Link } from 'react-router-dom'

export default function Restaurant(props) {
    const { restaurant, currentUser, destroyRestaurant, history } = props;
    return (
        <>
        <hr />
            {restaurant &&
                <>
                    <h3>ONE RESTAURANT</h3>
                    <React.Fragment> 
                    <Link to ={`/restaurants/${restaurant.id}`} >
                        {restaurant.name}
                        {restaurant.location}
                        {restaurant.imgURL}
                        {restaurant.description}
                    </Link>
                    {
                        currentUser && currentUser.id === restaurant.user_id && (
                            <>
                            <button onClick={() => history.push(`/restaurant/${restaurant.id}/edit}`)}>Edit</button>
                            <button onClick={() => destroyRestaurant(restaurant.id)}>Delete</button>            
                            </>
                        )
                    }
                    </React.Fragment>
             </>
           }
                <Link><button>REVIEW</button></Link>
        </>
     )
}
