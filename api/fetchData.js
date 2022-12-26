import axios from 'axios'

export const getApiCourse = async () => {
    try {
        return await axios.get('http://localhost:5000/courses')
            .then(res => res.data)
    } catch (error) {
        console.log('Err', error.message)
    }
}

export const getApiTeachers = async () => {
    try {
        return await axios.get('http://localhost:5000/teachers')
            .then(res => res.data)
    } catch (error) {
        console.log('Err', error.message)
    }
}

export const postMessage = async (dataFromApp) => {
    try {
        const { data } = await axios.post(`http://localhost:5000/contact/`, dataFromApp)
        return data
    } catch (error) {
        console.log('Err', error.message);
    }
}

export const paypal = async (paypal) => {
    try {
        const { data } = await axios.post(`http://localhost:5000/paypal/`, paypal)
        return data
    } catch (error) {
        console.log('Err', error.message);
    }
}