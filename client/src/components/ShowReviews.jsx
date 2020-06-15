import React from 'react'
import './ShowReviews.css'

export default function ShowReviews(props) {
    const {reviews} = props;
    return (
        <div className="submitted-reviews">
            <h3>Your Reviews</h3>
            {
                reviews.map(review => (
                    <p key={review.id}>{review.text}</p>
                ))
            }
        </div>
    )
}
