import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.handle = this.handle.bind(this);

    this.state = {
      txtNome: "",
      txtArea: "",
      check: false,
    };
  }

  handle({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>My Form</h1>
        <form>
          <label>
            Your name:
            <input
              type="text"
              name="txtNome"
              value={this.state.txtNome}
              onChange={this.handle}
            />
          </label>

          <label>
            More information
            <textarea
              name="txtArea"
              value={this.state.txtArea}
              onChange={this.handle}
            />
          </label>

          <input
            type="checkbox"
            name="check"
            value={this.state.check}
            onChange={this.handle}
          />

          <input type="file" />
        </form>
      </div>
    );
  }
}

export default Form;
