import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.findmyfriends.app-web.ml',
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

        return res.data;
    } catch (error) {
        localStorage.removeItem('token');
        return false
    }
}

export const getFriends = async () => {
    try {
        const token = localStorage.getItem('token');

        const res = await api.get(`/users/friends`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (res.status !== 200) {
            return false;
        }

        return res;
    } catch (error) {
        return error.response;
    }
}

// Waypoints
export const createWaypoint = async (payload) => {
    try {
        console.log(payload)
        const token = localStorage.getItem('token');

        const res = await api.post(`/waypoints`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        console.log(res);

        return res;
    } catch (error) {
        console.log(error.response);
        return error.response;
    }
}

export const getWaypoints = async () => {
    try {
        const token = localStorage.getItem('token');

        const res = await api.get(`/waypoints`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return res;
    } catch (error) {
        return error.response;
    }
}
