import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',
    // headers: {
    //     someHeader: 'this is a custom axios instance'
    // }
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance