import React, { Component } from "react";
// import Childcomponent from "./Childcomponent";
class Excount extends Component {
  state = {
    value: 10,
    arr: [
      { name: `sang`, old: 23, id: 1 },
      { name: `anh`, old: 25, id: 2 },
    ],
  };
  Delete = (indexToRemove) => {
    let narr = this.state.arr.filter((item, index) => index !== indexToRemove);
    this.setState({
      arr: narr,
    });
  };
  Update2 = (item) => {
    const arrn = this.state.arr.map((item2) => {
      if (item2.id === item.id) {
        return item; // cập nhật bằng item mới
      }
      return item2; // giữ nguyên
    });
    this.setState({ arr: arrn });
  };
  Update = (infor) => {
    if (infor.name !== ``) {
      this.setState({
        arr: [...this.state.arr, infor],
      });
    } else {
      alert(`Something wrong`);
    }
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
      <>
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
        {/* <Childcomponent
          arr={this.state.arr}
          onClick={this.Update}
          Delete={this.Delete}
          Update={this.Update2}
        /> */}
      </>
    );
  }
}

export default Excount;
