import React from 'react';
import axios from 'axios';

export class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        axios.get('/api/list').then(response=>{
            let list = response.data;
            this.setState({list});
        });
    }

    render(){
        console.log(this.state);
        return(
            <div>
                {this.state.list.map(item=>{
                    console.log(item);
                    return(<p key={item._id}>{item.name}</p>)
                })}
            </div>
        )
    }
}