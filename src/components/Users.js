import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
// add any needed imports here
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user=><li>{user.username}</li>)}
          Number of Users: {this.props.numOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
    numOfUsers: state.users.length
   };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
