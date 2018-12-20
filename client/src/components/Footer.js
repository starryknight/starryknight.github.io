import React, { Component } from "react";
import {Panel, Button, } from 'react-bootstrap'


class Footer extends Component {
    state = {
        open: true
      };
  render() {
    return (
        <div>
          
  
          <Panel id="collapsible-panel-example-3" defaultExpanded>
            <Panel.Heading>
              <Panel.Title>Title that functions as a collapse toggle</Panel.Title>
              <Panel.Toggle componentClass="a">My own toggle</Panel.Toggle>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <div>telephone</div>
                <div>telephone</div>
                <div>telephone</div>
                <div>telephone</div>
                <div>telephone</div>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
      );
  }
}

export default Footer;
