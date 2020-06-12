import React from 'react'

export default function ShowReviews(props) {
    const {reviews} = props;
    return (
        <div>
            <h3>Reviews</h3>
            {
                reviews.map(review => (
                    <p key={review.id}>{review.text}</p>
                ))
            }
        </div>
    )
}
