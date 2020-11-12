import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddUser} />
        {this.props.users.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeleteUser(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (name, age) =>
      dispatch({
        type: "ADD",
        personData: {
        name: name,
        age: age,}
      }),
    onDeleteUser: (id) =>
      dispatch({
        type: "DELETE",
        id: id,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
