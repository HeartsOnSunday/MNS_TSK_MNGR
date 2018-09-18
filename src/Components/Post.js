import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    console.log(this.props.post);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.Category}</h4>
        <h6 className="center">Task No. {this.props.post.id}</h6>
        <p>Task Description: {this.props.post.Entry}</p>
        <div className="center">
          <button className="btn complete" onClick={this.handleCurrent}>
            List As Current Task
          </button>
          <br />
          <button className="btn pending" onClick={this.handlePending}>
            Schedule As Pending Task
          </button>
          <br />
          <button className="btn complete" onClick={this.handleComplete}>
            Complete Task
          </button>
          <br />
          <button className="btn delete" onClick={this.handleClick}>
            Delete Task
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
