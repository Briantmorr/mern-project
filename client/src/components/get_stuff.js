import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component{
    componentDidMount(){
        axios.get('http://localhost:9000/api/get-stuff').then(resp => {
            console.log('reponse from server', resp);
        }).catch(err => {
        console.log('error is ', err);
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