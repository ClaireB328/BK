import api from './api-helper';

export const getReviews = async () => {
    const resp = await api.get('/reviews')
    return resp.data;
}

export const getOneReview = async (id) => {
    const resp = await api.get(`/reviews/${id}`);
    return resp.data
}

export const createReview = async (reviewData) => {
    const resp = await api.post('/reviews', { review: reviewData });
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

