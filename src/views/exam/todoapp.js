import React, { Component } from "react";

class todoapp extends Component {
  state = {
    tempname: ``,
    tempid: null,
    item: {},
    Todolist: [
      {
        id: 1,
        name: `Pu`,
      },
      {
        id: 2,
        name: `Puc`,
      },
    ],
  };
  handelchangename = (event) => {
    this.setState({
      tempname: event.target.value,
    });
  };
  handelonclick = () => {
    if (this.state.tempname !== ``) {
      let newlist = [...this.state.Todolist];
      let newitem = {
        id: newlist.pop().id + 1,
        name: this.state.tempname,
      };
      newlist.push(newitem);
      this.setState({
        Todolist: [...this.state.Todolist, newitem],
        tempname: ``,
      });
    } else {
      alert(`vui long nhap du lieu `);
    }
  };
  DeleteItem = (id) => {
    let newlist = this.state.Todolist.filter((item) => item.id !== id);
    this.setState({
      Todolist: newlist,
    });
  };
  handelUpdate = (item) => {
    if (this.state.tempname === ``) {
      console.log(`id`, item.id, `name`, item.name);
      this.setState({
        tempname: item.name,
        tempid: item.id,
      });
    } else {
      if (item.id === this.state.tempid) {
        let myArray = this.state.Todolist;
        let objIndex = myArray.findIndex((obj) => obj.id === item.id);
        myArray[objIndex].name = this.state.tempname;
        this.setState({
          Todolist: myArray,
          tempname: ``,
          tempid: null,
        });
      } else {
        this.setState({
          tempname: ``,
          tempid: null,
        });
        alert("Thao tac sai");
      }
    }
  };
  render() {
    let { Todolist } = this.state;
    return (
      <>
        <div>
          <input
            value={this.state.tempname}
            onChange={(event) => this.handelchangename(event)}
            placeholder="nhap toi"
          />
          <button
            onClick={() => {
              this.handelonclick();
            }}
          >
            Add
          </button>
        </div>
        {Todolist.map((item) => {
          return (
            <div key={item.id}>
              id: {item.id} name: {item.name}
              <button
                onClick={() => {
                  this.DeleteItem(item.id);
                }}
              >
                Xoa
              </button>
              <button onClick={() => this.handelUpdate(item)}>
                {this.state.tempid === item.id ? `Save` : `Sua`}
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default todoapp;
