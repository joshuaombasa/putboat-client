import { redirect } from "react-router-dom"

export function authenticateUser(pathname) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (!isLoggedIn) {
        // throw redirect('/login')
        throw redirect(`/login?redirectTo=${pathname}`)
    }
}