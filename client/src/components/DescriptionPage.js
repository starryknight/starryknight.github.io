import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectsPage from './ProjectsPage';
class DescriptionPage extends Component {
    render() {
        const Description = styled.div`
  display:flex;
`;

        return (
            <Description>
     
                <img src='http://polishkasia.com/wp-content/uploads/2017/07/megansugarskull-450x527.jpg' size='small' alt ="skrr"/>
                <div>
                <p>I am a full-stack web developer with a passion for application development, I am proficient in the traditional front end stack of HTML, CSS and Javascript and different frameworks such as Ruby/ Rails, Python/ Django, Node/ Express in the server side React.js on the front-end and both SQL and No-SQL databases. I have experience with working with these technologies having worked as an instructional assistant since September 2018. I will bring attention to detail and debugging experience having worked with a wide variety of code and a willingness and ability to learn, that I am personally proud of, if given a chance.</p>
                <h2>My Projects</h2>
                <ProjectsPage />
                </div>
            </Description>
        );
    }
}

export default DescriptionPage;