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
    event.stopPropagation();
    event.preventDefault();
    let dt = event.dataTransfer;
    let files = dt.files;
    let reader = new FileReader();
    reader.addEventListener("load", e => {
      console.log(e.target.result, JSON.parse(reader.result))
    });
    reader.readAsText(files[0]);
  };
  onDragEnter = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  onDragLeave = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  onDragOver = (event) => {
    event.stopPropagation();
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
