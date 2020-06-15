import React, { Component } from 'react'
import './CreateRestaurant.css'

export default class CreateRestaurant extends Component {
    state={
        name: "",
        location: "",
        imgURL: "",
        description: ""
    }

    handleChange= (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, location, imgURL, description } = this.state;
        const { postRestaurant, history } = this.props
        return (
            <form className="create-rest-form" onSubmit={(e) => {
                e.preventDefault();
                postRestaurant(this.state);
                history.push('/restaurants');
                this.setState({
                    name: "",
                    location: "",
                    description: ""
                })
            }}>
                <h3 className="create-restaurant-title">Create Restaurant</h3>
                <label htmlFor="name">Restaurant Name:
                <input className="create-name"
                id="name"
                type="text" 
                name="name"
                value={name}
                onChange={this.handleChange}
             /> 
            </label>
            <br />
                <label htmlFor="location">Location:
                <input className="create-location"
                id="location"
                type="text" 
                name="location"
                value={location}
                onChange={this.handleChange}
             /> 
            </label>
            <br />
            
                <label htmlFor="description">Description:
                <input className="create-description"
                id="description" 
                type="text" 
                name="description"
                value={description}
                onChange={this.handleChange}
             /> 
            </label>
            
                <button className="create-rest-submit">Submit</button>
            </form>
        )
    }
}
