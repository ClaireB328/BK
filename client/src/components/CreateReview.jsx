import React, { Component } from 'react'

export default class CreateReview extends Component {
    state={
        text: ""
    }

    handleChange= (e) => {
        const { text, value } = e.target;
        this.setState({
            [text]: value
        })
    }

    render() {
        const { text } = this.state;
        const { postReview, history } = this.props
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                postReview(this.state);
                history.push('/reviews');
                this.setState({
                    text: "",
                  
                })
            }}>
                <h3>Create Review</h3>
                <label htmlFor="text">Review:
                <input 
                id="text"
                type="text" 
                name="Review"
                value={text}
                onChange={this.handleChange}
             /> 
            </label>
            <br />
                
                <button>Submit</button>
            </form>
        )
    }
}
