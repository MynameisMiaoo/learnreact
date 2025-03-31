import React, { Component } from "react";

class Excolor extends Component {
  state = {
    color: "null",
  };
  // require : 3 color when touch this change color.
  ChangeColor(event) {
    this.setState({
      color: event.target.textContent,
    });
  }
  render() {
    return (
      <>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{ backgroundColor: "black" }}
            onMouseOver={(event) => this.ChangeColor(event)}
          >
            Black
          </div>
          <div
            style={{ backgroundColor: "green" }}
            onMouseOver={(event) => this.ChangeColor(event)}
          >
            Green
          </div>
          <div
            style={{ backgroundColor: "red" }}
            onMouseOver={(event) => this.ChangeColor(event)}
          >
            Red
          </div>
        </div>
        <div className="result" style={{ backgroundColor: this.state.color }}>
          Result
        </div>
      </>
    );
  }
}

export default Excolor;
