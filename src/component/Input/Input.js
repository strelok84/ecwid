import React from "react";

class Input extends React.Component {
  state = {
    url: [],
  };
  onSubmit = (event) => {
    event.preventDefault();
    alert("1");
  };
  onDrop = (event) => {
    event.preventDefault();
    let dt = event.dataTransfer;
    let files = dt.files;
    let json = dt.getData('json');
    console.log(JSON.parse(json))
  };
  onDragEnter = (event) => {
    event.preventDefault();
  };
  onDragLeave = (event) => {
    event.preventDefault();
  };
  onDragOver = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="wrapper">
        <div
          className="drag-n-drop"
          onDrop={this.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onDragOver={this.onDragOver}
        >
          <form onSubmit={this.onSubmit}>
            <input type="url" onChange={this.onChange}></input>
          </form>
        </div>
        <input type="file"></input>
      </div>
    );
  }
}

export default Input;
