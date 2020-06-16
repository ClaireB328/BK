import React, { Component } from 'react'
import './EditRestaurant.css'

export default class EditRestaurant extends Component {
  state = {
    name: "",
    location: "",
    imgURL: "",
    description: ""
  }

  componentDidMount() {
    if (this.props.restaurant) {
      this.setRestaurantForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurant !== this.props.restaurant) {
      this.setRestaurantForm();
    }
  }

  setRestaurantForm = () => {
    const { name, location, description } = this.props.restaurant
    this.setState({ name, location, description })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, location, description } = this.state;
    const { putRestaurant, restaurant } = this.props;
    return (
      <form className="edit-form" onSubmit={(e) => {
        e.preventDefault();
        putRestaurant(restaurant.id, this.state);
        this.props.resetEdit();
        this.setState({
          name: "",
          location: "",
          description: ""
        })
      }}>
   
        <h3 className="edit-rest-title">Edit restaurant here...</h3>
        <label htmlFor="name">Name:
        <input className="edit-form-name"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        </label>
         <label htmlFor="location">Location:
        <input className="edit-form-location"
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={this.handleChange}
        />
        </label>
         <label htmlFor="description">Description:
        <input className="edit-form-description"
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        </label>
        <button className="edit-rest-submit">Submit</button>
      </form>
    )
  }
}