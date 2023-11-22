//ให้เข้าหน้าไหนได้บ้าง

import TodoPage from '../components/pages/Index'
import LoginPage from '../components/pages/Login'
import ProfilePage from '../components/pages/Profile'
import RegisterPage from '../components/pages/Register'

const components = {
    todo: {
        url: "/todo",
        component: TodoPage   
    },
    login: {
        url: "/login",
        component: LoginPage
    },
    profile: {
        url: "/profile",
        component: ProfilePage
    },
    register: {
        url: "/register",
        component: RegisterPage
    }
};

// Role ไหนเข้าหน้าไหนได้บ้าง
export default {
    //ยังไม่ login
    guest: {
        allowedRoutes: [
            components.login,
            components.register,
        ],
        redirectRoutes: "/login"
    } ,
    // login แล้ว
    user: {
        allowedRoutes: [
            components.todo,
            components.profile
        ],
        redirectRoutes: "/profile"
    },

}