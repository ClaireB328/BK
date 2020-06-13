import React, { Component } from 'react'

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
            <form onSubmit={(e) => {
                e.preventDefault();
                postReview(this.state, restaurantId);
                this.setState({
                    text: "",
                  
                })
            }}>
                <h3>Create Review</h3>
                <label htmlFor="text">Review:
                <input 
                id="text"
                type="text" 
                name="text"
                value={text}
                onChange={this.handleChange}
             /> 
            </label>

                <button>Submit</button>
            </form>
        )
    }
}
