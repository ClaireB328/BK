import React, { Component } from 'react'
import './CreateReview.css'

export default class CreateReview extends Component {
    state={
        text: ""
    }

    handleChange= (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { text } = this.state;
        const { postReview, restaurantId } = this.props
        return (
            <form className="create-review-form" onSubmit={(e) => {
                e.preventDefault();
                postReview(this.state, restaurantId);
                this.setState({
                    text: "",
                  
                })
            }}>
                <h3>Leave your review here...</h3>
                <label htmlFor="text">
                <input className="review-input"
                id="text"
                type="text" 
                name="text"
                value={text}
                onChange={this.handleChange}
             /> 
            </label>

                <button className="review-submit">Submit</button>
            </form>
        )
    }
}
