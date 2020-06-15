import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <>

                        <React.Fragment>
                            <div className="one-rest">
                                {restaurant.name}
                                {restaurant.location}
                                <img className="single-image" src={restaurant.imgURL} /> 
                                {restaurant.description}
                            </div>
                            {
                                currentUser && currentUser.id === restaurant.user_id && (
                                    <>
                                        <button onClick={() => this.setState({ isEdit: true })}>Edit</button>
                                        <button onClick={() => destroyRestaurant(restaurant.id)}>Delete</button>
                                        {/* <button onClick={() => this.setState({ isReview: true})}>Review</button> */}
                                    </>
                                )
                            }
                        </React.Fragment>
                        {this.state.isEdit &&
                            <EditRestaurant
                                {...this.props}
                                resetEdit={this.resetEdit}
                            />

                        }
                        <ShowReviews 
                        reviews = {restaurant.reviews}
                        />
                        <CreateReview 
                        {...this.props}
                        restaurantId = {restaurant.id} 
                        />
                    </>
                }
              
            </>
        )
    }
}
