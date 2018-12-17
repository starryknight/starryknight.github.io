import React, { Component } from 'react';
import { Thumbnail, Col } from 'react-bootstrap'
import axios from 'axios';
class ProjectsPage extends Component {
    state = {
        projects:[]
    }
    componentDidMount (){
        axios.get('api/projects').then((res)=>{
            this.setState({projects:res.data})
        })
    }
    render() {

        return (
            this.state.projects.map((project)=>{ 
return <Col xs={3} md={3} key={project.id}>
                       <Thumbnail src={project.image} alt="242x200" />
                       
                       <a href={project.link} target="_blank">Click Here To View Project</a>
                       
                       
                   </Col>
            })
            
        );
    }
}

export default ProjectsPage;