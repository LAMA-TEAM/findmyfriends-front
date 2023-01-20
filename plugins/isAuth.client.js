import { getMe } from "~/lib/api";

export default defineNuxtPlugin(() => {
    if (process.server) return;

    addRouteMiddleware('global-test', async (to, from) => {
        if (to.path.includes('/dashboard')) {
            const token = localStorage.getItem('token');

            if (!token) {
                return navigateTo('/signin');
            }

            const isAuth = await getMe(token);
            if (!isAuth) {
                return navigateTo('/signin');
            }
        }

        if (to.path === '/signin' || to.path === '/signup') {
            const token = localStorage.getItem('token');

            if (token) {
                const isAuth = await getMe(token);
                if (isAuth) {
                    return navigateTo('/dashboard');
                }
            }
        }
    }, { global: true });
  })
  