import api from './api-helper';



export const createReview = async (reviewData, restaurant_id) => {
    const resp = await api.post(`/restaurants/${restaurant_id}/reviews`, { review: reviewData });
    return resp.data
}

export const updateReview = async (id, reviewData) => {
    const resp = await api.put(`/reviews/${id}`, { review: reviewData });
    return resp.data;
}

export const deleteReview = async (id) => {
    const resp = await api.delete(`/reviews/${id}`)
    return resp
}

