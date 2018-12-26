import axios from 'axios';

const httpServices = {
    get: (catalogUrl, resourseUrl, tmt, fnctn, cb) => {
        axios({
                url: catalogUrl,
                baseURL: resourseUrl,
                method: 'get',
                timeout: tmt,
                validateStatus: fnctn
        }).then(res => {
            cb(res.data);
        }).catch(function (error) {
            console.log('Oh, an error... Err = ', error);
    })
},

post: (catalogUrl, resourseUrl, dt, fnctn, cb) =>
    {
        axios({
            url: catalogUrl,
            baseURL: resourseUrl,
            method: 'post',
            data: dt,
            validateStatus: fnctn
        }).then(res => {
            cb(res.data);
        }).catch(function (error) {
            console.log('Oh, an error... Err = ', error);
    })
},

delete: (catalogUrl, resourseUrl, itemId, fnctn, cb) =>
    {
        axios({
            url: catalogUrl,
            baseURL: resourseUrl,
            method: 'delete',
            data: itemId,
            validateStatus: fnctn
        }).then(res => {
            cb(res.data);
        }).catch(function (error) {
            console.log('Oh, an error... Err = ', error);
    })
},

patch: (catalogUrl, resourseUrl, dt, fnctn, cb)  =>
    {
        axios({
            url: catalogUrl,
            baseURL: resourseUrl,
            method: 'patch',
            data: dt,
            validateStatus: fnctn
        }).then(res => {
            cb(res.data);
        }).catch(function (error) {
            console.log('Oh, an error... Err = ', error);
    })
    }
}

export default httpServices;