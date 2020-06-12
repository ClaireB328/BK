import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { getAllReviews } from '../services/reviews'
import { getAllRestaurants, createRestaurant, deleteRestaurant } from '../services/restaurants'
import ShowReviews from './ShowReviews'
import ShowRestaurants from './ShowRestaurants'
import CreateRestaurant from './CreateRestaurant'
import Restaurant from './Restaurant'

export default class Main extends Component {
state = {
    reviews: "",
    restaurants: []
}

componentDidMount(){
    this.getReviews();
    this.getRestaurants();
}
// ========== REVIEWS ===========
getReviews = async () => {
    const reviews = await getAllReviews();
    this.setState({ reviews });

// ========= RESTAURANTS =========
}
getRestaurants = async () => {
    const restaurants = await getAllRestaurants();
    this.setState({ restaurants });
}

postRestaurant = async (restaurantData) => {
    const newRestaurant = await createRestaurant(restaurantData);
    this.setState(prevState => ({
        restaurants: [...prevState.items, newRestaurant]
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

                <Route path='/reviews' render={() => (
                    <ShowReviews
                    reviews={this.state.reviews}
                    />
                )} />
                <Route path='/restaurants' render={() => (
                    <ShowRestaurants
                    restaurants={this.state.restaurants}
                    currentUser={this.props.currentUser}
                    destroyRestaurant={this.destroyRestaurant}
                    />
                )} />
                <Route path='/new/restaurant' render={(props) => (
                    <CreateRestaurant
                    {...props}
                    postRestaurant={this.postRestaurant}
                    />
                )} />

                {/* <Route path='/restaurants/${id}' render={() => (
                    <Restaurant />
                )} /> */}

                
            </main>
        )
    }
}


// do not want CRUD on main page with all restaurants. want CRUD/reviews on selected restaurant. doing it this way for testing