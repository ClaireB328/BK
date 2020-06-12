import React, { Component } from 'react'

export default class EditRestaurant extends Component {
  state = {
    name: "",
    location: "",
    imgURL: "",
    description: ""
  }

  // Our update component is very similar to our Create
  // component except that we have additional methods to
  // set the form data for the item in state that we want to update.

  // componentDidMount will set our form data when the component renders
  // however if we refresh the page on the form, the food wont exist yet.
  // This is why we only setFoodForm inside of the conditional.
  componentDidMount() {
    if (this.props.restaurant) {
      this.setRestaurantForm();
    }
  }
  
  // componentDidUpdate only gets triggered when we refresh the page on the form.
  // the food props wont be there when the component first mounts but will
  // "arrive" a moment later. componentDidUpdate will see this and then setFoodForm.
  componentDidUpdate(prevProps) {
    if (prevProps.restaurant !== this.props.restaurant) {
      this.setRestaurantForm();
    }
  }

  // setFoodForm just grabs the food passed from props and sets state
  setRestaurantForm = () => {
    const { name } = this.props.restaurant
    this.setState({ name })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, location, imgURL, description } = this.state;
    const { putRestaurant, history, restaurant } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        putRestaurant(restaurant.id, this.state);
        history.push('/restaurants/.id/edit');
        this.setState({
          name: "",
          location: "",
          description: ""
        })
      }}>
        <hr />
        <h3>Edit Restaurant</h3>
        <label htmlFor="name">Name:
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        </label>
         <label htmlFor="location">Location:
        <input
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={this.handleChange}
        />
        </label>
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