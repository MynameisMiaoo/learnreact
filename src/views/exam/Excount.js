import React, { Component } from "react";

class Excount extends Component {
  state = {
    value: 10,
  };
  Cong(event) {
    // event.preventDefault();
    this.setState({
      value: this.state.value + 1,
    });
    console.log(event.type);
  }
  Tru(event) {
    // event.preventDefault();
    this.setState({
      value: this.state.value - 1,
    });
    console.log(event.type);
  }
  render() {
    return (
      <div>
        <button onClick={(event) => this.Cong(event)}>+</button>
        <input
          type="number"
          value={this.state.value}
          readOnly
          style={{ textAlign: "center" }}
        ></input>
        <button onClick={(event) => this.Tru(event)}>-</button>
      </div>
    );
  }
}

export default Excount;
