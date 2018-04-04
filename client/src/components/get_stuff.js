import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component{
    componentDidMount(){
        axios.get('/api/get-stuff').then(resp => {
            console.log('reponse from server', resp);
        }).catch(err => {
        console.log('error is ');
        console.dir(err);
        });

        axios.post('/api/get-user').then(res => {
            console.log("user is: ", res);
        }).catch(err => {
        console.log('error is: ');
        console.dir(err);
        });
    }
    render(){
        return (
            <div>
                <h1>Get Stuff</h1>
            </div>
        )
    }
}

export default GetStuff;