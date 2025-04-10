import React, { Component } from "react";

class Childcomponent extends Component {
  state = {
    status: false,
    updatestatus: false,
    update: {
      name: `test`,
      id: 0,
      old: 0,
    },
  };
  Handelclick = () => {
    this.setState({
      status: !this.state.status,
    });
    console.log(this.state.status);
  };
  UpdateStatus = () => {
    this.setState({
      updatestatus: !this.state.updatestatus,
    });
  };
  render() {
    let { arr } = this.props;
    return (
      <>
        {this.state.status === true && arr.length > 0 ? (
          <>
            {arr.map((item, index) => {
              return (
                <div key={item.id}>
                  Ten {item.name} - Tuoi {item.old} - id {item.id}
                  <button onClick={() => this.props.Delete(index)}>Xoa</button>
                  {!this.state.updatestatus ? (
                    <button onClick={() => this.UpdateStatus()}>Update</button>
                  ) : (
                    <button
                      onClick={() => this.props.Update(this.state.update)}
                    >
                      Save
                    </button>
                  )}
                </div>
              );
            })}
            <button onClick={() => this.Handelclick()}>Hide</button>
          </>
        ) : (
          <>
            <div>Nothing!</div>
            <button onClick={() => this.Handelclick()}>Show</button>
          </>
        )}
        <button
          onClick={() =>
            this.props.onClick({ name: `Pu`, old: 1, id: arr.length + 1 })
          }
        >
          Add
        </button>
      </>
    );
  }
}

export default Childcomponent;
