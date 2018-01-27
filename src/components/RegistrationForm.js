import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
      <input type="text" placeholder="Name"></input>
      <input type="password" placeholder="Password"></input>
      <button type="submit">Submit</button>
      </form>

    )
  }
}

export default RegistrationForm
