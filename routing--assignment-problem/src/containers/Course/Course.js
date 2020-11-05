import React, { Component } from "react";

class Course extends Component {
  state = {
    title: null,
  };

  componentDidMount() {
    console.log('DidMount Worked')
    this.setState({ title: this.getTitleFromParams() });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate >>>', prevState)
    if (prevState.title !== this.getTitleFromParams()) {
      this.setState({ title: this.getTitleFromParams() });      
    }
    
  }

  getTitleFromParams() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      let title = param[1];
      return title;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
