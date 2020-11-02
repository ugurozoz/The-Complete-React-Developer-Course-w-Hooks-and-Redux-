import React, { Component } from "react";
// import axios from 'axios';
import { Route, Link } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    console.log( '>>',this.props)
  }


  render() {

    
    

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/new-post',
                  hash: "#submit",
                  search: '?quick-submit=true'
                }}>
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" render={() => <h1>Home</h1>} />
            <Route path="/" render={() => <h1>Home 2</h1>} />*/}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
