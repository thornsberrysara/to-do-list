import React, { useState } from "react";
import "./App.css";
import ListItems from "./ListItems";
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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
      <ThemeProvider theme={{ mode: 'dark' }}>
        <>
        <GlobalStyle />
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
      </>
      </ThemeProvider>
    );
  }
}

const GlobalStyle = createGlobalStyle `
* {
  font-family: ${props => props.theme.mode === 'dark' ? 'monospace' : 'Thasadith'};
}
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#1f1f1f' : '#fce8e4'};
}
.App {
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#f7cbc2'};
}
input {
  color: ${props => props.theme.mode === 'dark' ? '#39ff14' : '#282c34'};
}
#to-do-form input {
  background-color: ${props => props.theme.mode === 'dark' ? '#1f1f1f' : '#fce8e4'};
}
button {
  background-color: ${props => props.theme.mode === 'dark' ? '#39ff14' : '#fac43b'};
  color: ${props => props.theme.mode === 'dark' ? '#111' : '#282c34'};
}
i {
  color: ${props => props.theme.mode === 'dark' ? '#1f1f1f' : '#fce8e4'};
}
i:hover {
  color: ${props => props.theme.mode === 'dark' ? '#333333' : '#e4e4e4'};
}
`

export default App;
