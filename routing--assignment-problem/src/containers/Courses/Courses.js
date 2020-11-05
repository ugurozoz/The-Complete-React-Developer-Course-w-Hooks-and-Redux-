import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Course from "../Course/Course";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  componentDidMount() {
    //console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <NavLink
                key={course.id}
                to={{
                  pathname: `/courses/${course.id}`,
                  search: `?title=${course.title}`
                }}
              >
                <article className="Course" key={course.id}>
                  {course.title}
                </article>
              </NavLink>
            );
          })}
        </section>
        <Route path={this.props.match.url + "/:id"} component={Course} />
      </div>
    );
  }
}

export default Courses;
// to={{
//   pathname: "/new-post",
//   hash: "#submit",
//   search: "?quick-submit=true",
// }}
