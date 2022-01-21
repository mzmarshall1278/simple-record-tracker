import Cookies from 'js-cookie'

export default function ({store, redirect}) {
    // if(!store.getters.isAuthenticated) {
    //     redirect('/auth/login');
    // }

    const cook = Cookies.get('token');
}