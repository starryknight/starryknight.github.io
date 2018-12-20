import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
    state = {
        comments:[]
    }

    componentDidMount(){
        axios.get('api/comments/').then((res)=>{
            this.setState({comments:res.data})
            console.log(this.state.comments)
        })
    }
    render() {
        
        return(
        
            this.state.comments.map((comment)=>{
                return <div>{comment.comments}</div>
            } )               

        )  
                   
    }
}

export default Comments;