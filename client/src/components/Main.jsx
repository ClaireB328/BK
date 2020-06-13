import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { getAllReviews, createReview } from '../services/reviews'
import { getAllRestaurants, createRestaurant, deleteRestaurant, updateRestaurant } from '../services/restaurants'
import ShowReviews from './ShowReviews'
import ShowRestaurants from './ShowRestaurants'
import CreateRestaurant from './CreateRestaurant'
import Restaurant from './Restaurant'
import CreateReview from './CreateReview'
import EditRestaurant from './EditRestaurant'

export default class Main extends Component {
state = {
    restaurants: []
}

componentDidMount(){
    this.getRestaurants();
}
// ========== REVIEWS ===========

postReview = async (reviewData, restaurant_id) => {
    const updatedRestaurant = await createReview(reviewData, restaurant_id);
    this.setState(prevState => ({
        restaurants: prevState.restaurants.map(restaurant => restaurant.id === restaurant_id ? updatedRestaurant : restaurant)
      }))
}

// ========= RESTAURANTS =========

getRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants });
}

postRestaurant = async (restaurantData) => {
    const newRestaurant = await createRestaurant(restaurantData);
    this.setState(prevState => ({
        restaurants: [...prevState.restaurants, newRestaurant]
      }))
}

  // Our putFood method should follow a similar pattern that we're used to.
  // improt notes: we need an id and formData for our api call
  // For the setState, I referenced the frontend-CRUD-design lesson
  putRestaurant = async (id, restaurantData) => {
    const updatedRestaurant = await updateRestaurant(id, restaurantData);
    this.setState(prevState => ({
      restaurants: prevState.restaurants.map(restaurant => restaurant.id === id ? updatedRestaurant : restaurant)
    }))
  }


destroyRestaurant = async (id) => {
    await deleteRestaurant(id);
    this.setState(prevState => ({
        restaurants: prevState.restaurants.filter(restaurant => restaurant.id !== id)
      }))
}


    render() {
        return (
            <main>
                <Route path='/user/login' render={(props)=>(
                    <Login 
                    {...props}
                    handleLoginSubmit={this.props.handleLoginSubmit}
                    />
                )}/>
                <Route path='/user/register' render={(props)=>(
                    <Register
                    {...props}
                    handleRegisterSubmit={this.props.handleRegisterSubmit}
                    
                    />
                )}/>

                <Route exact path='/' render={() => (
                    <ShowRestaurants
                    restaurants={this.state.restaurants}
                    />
                )} />

                <Route path='/new/restaurant' render={(props) => (
                    <CreateRestaurant
                    {...props}
                    postRestaurant={this.postRestaurant}
                    />
                )} />

                <Route path='/restaurants/:id' render={(props) => {
                   const restaurantId = props.match.params.id 
                   const restaurant = this.state.restaurants.find(restaurant => restaurant.id === parseInt(restaurantId))
                   return <Restaurant 
                   {...props}
                   restaurant={restaurant}
                   currentUser={this.props.currentUser}
                   destroyRestaurant={this.destroyRestaurant}
                   putRestaurant={this.putRestaurant}
                   postReview={this.postReview}
                   />  

                }} />



                
                
            </main>
        )
    }
}


