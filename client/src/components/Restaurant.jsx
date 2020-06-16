import React, { Component } from 'react'
import EditRestaurant from './EditRestaurant'
import ShowReviews from './ShowReviews'
import CreateReview from './CreateReview'
import './Restaurant.css'

export default class Restaurant extends Component {
    state = {
        isEdit: false,
        // isReview: false
    }

    resetEdit = () => {
        this.setState({ isEdit: false })
    }


    render() {
        const { restaurant, currentUser, destroyRestaurant } = this.props
        return (
            <>
                {restaurant &&
                    <div className="restaurant-container">

                        <div className="review-container">
                        <CreateReview 
                        {...this.props}
                        restaurantId = {restaurant.id} 
                        />
                        <ShowReviews 
                        reviews = {restaurant.reviews}
                        />
                        </div>

                        <div className="single-rest">
                         {
                                currentUser && currentUser.id === restaurant.user_id && (
                                    <div className="edit-delete">
                                        <button className="rest-edit-button" onClick={() => this.setState({ isEdit: true })}>Edit</button>
                                        <button className="rest-delete-button" onClick={() => destroyRestaurant(restaurant.id)}>Delete</button>
                                        {/* <button onClick={() => this.setState({ isReview: true})}>Review</button> */}
                                    </div>
                                )
                            }
                            <div className="one-rest">
                                <h1 className="one-rest-name">{restaurant.name}</h1>
                            
                                <h2 className="one-rest-location">{restaurant.location}</h2>
                                <img className="single-image" src={restaurant.imgURL} alt="restaurant"/> 
                                <h3 className="one-rest-description">{restaurant.description}</h3>
                            </div>  
                        </div>

                        {this.state.isEdit &&
                            <EditRestaurant
                                {...this.props}
                                resetEdit={this.resetEdit}
                            />

                        }
                    
                    </div>
                }
              
            </>
        )
    }
}
