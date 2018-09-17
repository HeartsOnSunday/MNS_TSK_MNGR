import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../HCH_SQ_Underline.png";
import { connect } from "react-redux";
//convert from functional to class-based component
class Home extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.posts);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Logo} alt="HCH Logo" />
            <div className="card-content">
              <span className="card-id">{post.id}</span>
              <Link to={"/" + post.id}>
                <span className="card-title">Category: {post.Category}</span>
              </Link>
              <span className="taskSubcategory">
                Subcategory: {post.Subcategory}
              </span>
              <br />
              <span className="taskPriority">
                Task Priority {post.Priority}
              </span>

              <p>{post.Entry}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet.</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts //map this to props
  };
};

export default connect(mapStateToProps)(Home);
