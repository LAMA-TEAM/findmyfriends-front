import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

// Auth
export const register = async (payload) => {
    try {
        const res = await api.post(`/auth/register`, payload);
        return res;
    } catch (error) {
        return error.response;
    }
}

export const login = async (payload) => {
    try {
        const res = await api.post(`/auth/login`, payload);

        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
        }

        return res;
    } catch (error) {
        return error.response;
    }
}

export const getMe = async (token) => {
    try {
        const res = await api.get(`/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (res.status === 401) {
            return false;
        }

        return true;
    } catch (error) {
        localStorage.removeItem('token');
        return false
    }
}

// Waypoints

