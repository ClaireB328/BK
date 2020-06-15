import React, { Component } from 'react'

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
            <form onSubmit={(e) => {
                e.preventDefault();
                postRestaurant(this.state);
                history.push('/restaurants');
                this.setState({
                    name: "",
                    location: "",
                    description: ""
                })
            }}>
                <h3>Create Restaurant</h3>
                <label htmlFor="name">Restaurant Name:
                <input 
                id="name"
                type="text" 
                name="name"
                value={name}
                onChange={this.handleChange}
             /> 
            </label>
            <br />
                <label htmlFor="location">Location:
                <input 
                id="location"
                type="text" 
                name="location"
                value={location}
                onChange={this.handleChange}
             /> 
            </label>
            <br />
            
                <label htmlFor="description">Description:
                <input
                id="description" 
                type="text" 
                name="description"
                value={description}
                onChange={this.handleChange}
             /> 
            </label>
            
                <button>Submit</button>
            </form>
        )
    }
}
