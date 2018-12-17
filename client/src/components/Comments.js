import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
    state = {
        comments:[]
    }

    componentDidMount(){
        axios.get('api/comments').then((res)=>{
            this.setState({comments:res.data})
        })
    }
    render() {
        return (
            this.state.comments.map((comment,i))
            <div>
                
            </div>
        );
    }
}

export default Comments;