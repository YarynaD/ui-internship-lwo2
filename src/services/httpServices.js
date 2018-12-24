import axios from 'axios';

const httpServices = {
    get: (item_url, res_url, tmt, fnctn, cb) => {
        axios({
                url: item_url,
                baseURL: res_url,
                method: 'get',
                timeout: tmt,
                validateStatus: fnctn,
            })
        .then(res => {
        cb(res.data);
        }).catch(function (error) {
        console.log('Oh, an error... Err = ', error);
    })
},

post: (item_url, res_url, dt, cb) =>
    {
        axios({
            url: item_url,
            baseURL: res_url,
            method: 'post',
            data: dt
        })
            .then(res => {
            cb(res.data);
    }).catch(function (error) {
        console.log('Oh, an error... Err = ', error);
    })
},

delete: (item_url, res_url) =>
    {
        axios({
            url: item_url,
            baseURL: res_url,
            method: 'delete'
    });
},

patch: (res_url, dt)  =>
    {
        axios({
            baseURL: res_url,
            method: 'patch',
            data: dt
        })
    }
}

export default httpServices;