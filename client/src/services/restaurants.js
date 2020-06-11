import api from './api-helper';

export const getAllRestaurants = async () => {
    const resp = await api.get('/restaurants');
    return resp.data
}

export const getOneRestaurant = async (id) => {
    const resp = await api.get(`/restaurants/${id}`);
    return resp.data
}

export const createRestaurant = async (restaurantData) => {
    const resp = await api.post('/restaurants', { restaurant: restaurantData });
    return resp.data
}


export const updateRestaurant = async (id, restaurantData) => {
    const resp = await api.put(`/restaurants/${id}`, { restaurant: restaurantData });
    return resp.data
}

export const deleteRestaurant = async (id) => {
    const resp = await api.delete(`/restaurants/${id}`)
    return resp
}

export const reviewPostToRestaurant = async (reviewId, restaurantId) => {
    const resp = await api.post(`/reviews/${reviewId}/restaurants/${restaurantId}`);
    return resp.data
}