import React from 'react';

class OtherInfo extends React.Component {
  render () {
    const { email, id } = this.props;

    return (
      <>
      <h2>{email}</h2>
      <h3>{id}</h3>
      </>
    )
  }
}

export default OtherInfo;