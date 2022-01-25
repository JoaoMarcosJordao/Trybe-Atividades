import React from "react";

class UserName extends React.Component {
  render () {
    const name = this.props.name

    return (
      <h1>{name}</h1>
    )
  }
}


export default UserName;
