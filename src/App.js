import React from "react";
import "./App.css";
import ListItems from "./ListItems";

// library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const fildereditItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: fildereditItems,
    });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return item;
    });
    this.setState({
      items: items,
    });
  }
  render() {
    return (
      <div className="form-main">
        <header>
          <form id="todolist-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter your text here..."
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="button" onClick={this.addItem}>
              <i className="fa fa-plus" aria-hidden="true"></i> Add
            </button>
          </form>
          <p>{this.state.items.text}</p>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        ></ListItems>
      </div>
    );
  }
}

export default App;
