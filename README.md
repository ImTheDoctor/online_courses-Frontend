# Createx - Online Courses (Client Part)

Welcome to Createx. This is a fully functional website where you can buy online courses. The backend is written using Node JS/Express, the admin panel built with React and the UI framework is ANT Design. The client side is written in NEXT JS.

## ADMIN PANEL AND  

- [Admin Panel](https://github.com/ImTheDoctor/online_courses_admin)
- [Backend](https://github.com/ImTheDoctor/online_courses-Backend)

## Technologies

- [NextJS](https://vercel.com/solutions/nextjs)
- [React Saga](https://redux-saga.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [Axios](https://axios-http.com/docs/intro)


## USAGE

First you need to clone the repository 

```
$ git clone https://github.com/ImTheDoctor/online_courses-Frontend.git
$ cd online_courses-Frontend
```

After cloning do install dependencies

```
$ npm install
```

## Features

- Data fetching from backend via Axios
- For Authentication I use custom hooks (useLogin, useRegister and useLogout) and react-context
Example for login and register
```
import { useLogin } from '/hooks/useLogin';
import { useRegister } from '/hooks/useRegister';
...

const { login, error, isLoading } = useLogin()
const { register, error, isLoading } = useRegister()
...
const login = async (e) => {
        e.preventDefault()
        const newInfo = {
            email,
            password,
        }
        await login(newInfo)
    }

const register = async (e) => {
        e.preventDefault()
        const newInfo = {
            email,
            password,
        }
        await register(newInfo)
    }
```

- All data is stored in react saga (See in `redux` folder)
- All UI components are written in css modules and scss(Sass)

## Contacts

- [Henrik Hayrapetyan](https://www.linkedin.com/in/henrik-hayrapetyan/) — FullStack JS developer / Front-End developer