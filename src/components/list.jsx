import React, { Component } from "react";

class List extends Component {
  listItemStyles = {
    cursor: "pointer"
  };

  // Method applies strikethrough to clicked list item and passes item to parent component
  handleDelete = (item, e) => {
    e.target.style.textDecoration = "line-through";
    this.props.onClick(item);
  };

  render() {
    const { items } = this.props;

    if (items.length === 0) return <p>There are no items to display.</p>;

    return (
      <ul>
        {items.map(item => (
          <li
            onClick={e => this.handleDelete(item, e)}
            key={item.id}
            style={this.listItemStyles}
          >
            {item.value}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
