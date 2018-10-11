import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vue-axios-aa33b.firebaseio.com',
    headers: {
        someHeader: 'this is a custom axios instance'
    }
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance