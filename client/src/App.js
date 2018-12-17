import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import HomePage from './components/HomePage';


class App extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <Router>
        <div>

          

          <Switch>
            <Route exact path={"/"} component={HomePage}/>
            {/* <Route exact path={"/artist/:id"} component={Artist}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;