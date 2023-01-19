export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', (to, from) => {
        if (to.path.includes('/dashboard')) {
            console.log('this middleware will only run on /dashboard')
        } else {
            console.log('this middleware will run on every route')
        }
    }, { global: true });
  })
  