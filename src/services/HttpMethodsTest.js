import React from 'react';

import httpServices from './httpServices'

const my_baseUrl_init = 'https://jsonplaceholder.typicode.com/';
const my_url_init = 'users';

const my_timeout = 1000;

const my_func = function my_validateStatus(status){
    console.log('status =', status >= 200 && status < 300);
    return status >= 200 && status < 300;
};

const updatedObject_1 =
    {
        "id": 1,
        "name": "LLL",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }

    }

const my_data =
    {
        "id": 100,
        "name": "LLL",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    };

const item_id = 3;
const patch_item_id = 1;

const my_config = { headers: {'Content-Type': 'multipart/form-data' }};

export default class Methods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {persons: [], name: '', id: ''};

        this.Delete = this.Delete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        httpServices.post(my_url_init, my_baseUrl_init, my_data, my_func, (data) => {
            console.log(data);
    });
        console.log('POST2');
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    Delete() {
        httpServices.delete(my_url_init + '/' + item_id, my_baseUrl_init, my_func, (data) => {
            console.log(data);
    });
        console.log(my_url_init + this.state.id);
    }

    Patch() {
        httpServices.patch(my_baseUrl_init + my_url_init + '/' + patch_item_id, updatedObject_1, my_func)
        console.log(my_url_init + this.state.id);
    }

    Get() {
        httpServices.get(my_url_init, my_baseUrl_init, my_timeout, my_func, (data) => {
            console.log(data);
    });
    }

    componentDidMount() {
        httpServices.get(my_url_init, my_baseUrl_init, my_timeout, my_func, (data) => {
            this.setState({persons: data}, () => {
            console.log('state', this.state);
    });
    });
    }

    render() {
        return (
            <div>
            <ul>
            {this.state.persons.map(person => <li key = {person.id}>{person.name}</li>)}
    </ul>
        <div>
        <label> Person Data:
            <button onClick ={this.handleSubmit}> Add </button>
        </label>
        <button onClick = {() => this.Delete()}>Delete </button>
        <button onClick = {() => this.Patch()}>Patch</button>
        <button onClick = {this.Get}>Get</button>
        </div>
        </div>
    )
    }
}