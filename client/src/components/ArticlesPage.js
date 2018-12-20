import React, { Component } from "react";
import axios from "axios";
import { Row, Thumbnail, Col, Popover, Tooltip, Button } from "react-bootstrap";
import Comments from "./Comments";

class ArticlesPage extends Component {
  state = {
    articles: [],
    comments: [],
    show: false
  };
  componentDidMount() {
    axios
      .get("/api/articles")
      .then(res => {
        this.setState({ articles: res.data });
      })
      .then(
        axios.get("/api/comments").then(res => {
          this.setState({ comments: res.data });
        })
      );
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    return (
      <Row>
        {this.state.articles.map((article, i) => {
          return (
            <Col xs={2} md={2} key={article.id}>
              <Thumbnail src={article.image} alt="242x200" />

              <h3>{article.subject}</h3>
              <p>
                <form>
                  <input placeholder="leave me a comment" />
                  <Button bsStyle="primary" type="submit">
                    post
                  </Button>
                </form>
              </p>

              {/* {this.state.comments.map(comment => {
                if (comment.article === i + 1) {
                  return <p>{comment.comments}</p>;
                }
              })} */}
              <Comments />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default ArticlesPage;
