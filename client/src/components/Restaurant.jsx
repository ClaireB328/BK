import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditRestaurant from './EditRestaurant'
import ShowReviews from './ShowReviews'
import CreateReview from './CreateReview'

export default class Restaurant extends Component {
    state = {
        isEdit: false
    }

    resetEdit = () => {
        this.setState({ isEdit: false })
    }

    render() {
        const { restaurant, currentUser, destroyRestaurant } = this.props
        return (
            <>
                <hr />
                {restaurant &&
                    <>
                        <h3>ONE RESTAURANT</h3>
                        <React.Fragment>
                            <p>
                                {restaurant.name}
                                {restaurant.location}
                                <img className="single-image" src={restaurant.imgURL} /> 
                                {restaurant.description}
                            </p>
                            {
                                currentUser && currentUser.id === restaurant.user_id && (
                                    <>
                                        <button onClick={() => this.setState({ isEdit: true })}>Edit</button>
                                        <button onClick={() => destroyRestaurant(restaurant.id)}>Delete</button>
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
                <Link><button>REVIEW</button></Link>
            </>
        )
    }
}
