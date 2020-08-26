import React from "react";
import "./App.css";
import ListItems from "./ListItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        content: "",
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        content: e.target.value,
        key: Date.now()
      }
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.content !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          content: "",
          key: ""
        }
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  setUpdate(content, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.content = content;
      }
    });
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Wow, you're busy!"
              value={this.state.currentItem.content}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </header>
      </div>
    );
  }
}

export default App;
