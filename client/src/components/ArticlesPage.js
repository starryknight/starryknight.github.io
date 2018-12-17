import React, { Component } from 'react';
import axios from 'axios'
import{Row, Thumbnail, Col, Button} from 'react-bootstrap'

class ArticlesPage extends Component {
    state = {
        articles:[],
        comments:[]
        
    }
    componentDidMount(){
        axios.get('/api/articles').then((res) =>{
            this.setState({articles:res.data})
        }).then(axios.get('/api/comments').then((res)=>{this.setState({comments:res.data})}))
        
    }


    render() {console.log(this.statecomments)
        return (
            
            <Row>
                {this.state.articles.map((article, i)=>{
                   
                   
return(
<Col xs={2} md={2} key={article.id}>
                       <Thumbnail src={article.image} alt="242x200" />
                       
                       
                       <h3>{article.subject}</h3>
                       <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
        
        {this.state.comments.map((comment)=>{
            if(comment.article === i+1){
               return <p>{comment.comments}</p>
            }
        })}
                   </Col>
                )})}
            </Row>
        );
    }
}

export default ArticlesPage;