import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import List from "./components/list";
import Form from "./components/form";

class App extends Component {
  state = {
    items: []
  };

  // Method handles removal of a list item after a specified delay
  handleDelete = item => {
    const delay = 500;
    setTimeout(() => {
      const items = this.state.items.filter(itemObj => itemObj.id !== item.id);
      this.setState({ items });
    }, delay);
  };

  // Method handles adding a new item to list of items
  handleNewItem = item => {
    const { items } = this.state;
    const newItem = {
      id: Date.now(),
      value: item
    };

    items.push(newItem);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;

    return (
      <main role="main" className="container">
        <h3>Strikeout List</h3>
        <Form onAddItem={this.handleNewItem} />
        <List onClick={this.handleDelete} items={items} />
      </main>
    );
  }
}

export default App;
