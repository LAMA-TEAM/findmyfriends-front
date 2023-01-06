import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

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

export const getMe = async () => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            console.log('No token');
            router.push({ name: 'signin', params: { error: 'You must be logged in to view this page' } });
            return;
        }

        const res = await api.get(`/auth/me`);

        if (res.status === 401) {
            console.log('Unauthorized');
            localStorage.removeItem('token');
            router.push({ name: 'signin', params: { error: 'You must be logged in to view this page' } });
            return;
        }
    } catch (error) {
        return error.response;
    }
}

// Waypoints

