import React, { Component } from "react";

class Form extends Component {
  state = {
    textValue: ""
  };

  // Method handles passing new item value to parent component and clears the text box
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.textValue);
    this.setState({ textValue: "" });
  };

  // Method binds text box value to textValue in component state
  handleTextChange = ({ currentTarget: input }) => {
    this.setState({ textValue: input.value.trim() });
  };

  render() {
    const { textValue } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleTextChange}
            value={textValue}
            type="text"
            name="textbox"
          />
          <button
            disabled={!textValue.length ? "disabled" : ""}
            className="btn btn-primary btn-sm m-2"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
