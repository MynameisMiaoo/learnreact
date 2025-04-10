import React, { Component } from "react";

class Excomponent extends Component {
  state = {
    fname: "",
    lname: "",
  };
  handleOnchangefname = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };
  handleOnchangelname = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };
  handleclick = (event) => {
    event.preventDefault();
    console.log(`check fname:`, this.state.fname, `lname:`, this.state.lname);
  };
  render() {
    return (
      <div>
        <form>
          <label>First name:</label>
          <br />
          <input
            type="text"
            value={this.state.fname}
            onChange={(event) => this.handleOnchangefname(event)}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lname}
            onChange={(event) => this.handleOnchangelname(event)}
          />
          <br />
          <br />
          <input type="submit" onClick={(event) => this.handleclick(event)} />
        </form>
      </div>
    );
  }
}

export default Excomponent;
