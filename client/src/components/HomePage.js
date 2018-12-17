import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import DescriptionPage from './DescriptionPage';
import {Jumbotron, Button} from 'react-bootstrap'
import ArticlesPage from './ArticlesPage';
import Footer from './Footer';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
            <NavBar />
            <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>;
            <h1>Stanley Kimani</h1>
            <DescriptionPage />
            <Link to={'/'}>All Articles</Link>
            <ArticlesPage />
          </div>
          <Footer />
            </div>
        );
    }
}

export default HomePage;