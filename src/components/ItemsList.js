import React from "react";
import Table from "react-bootstrap/Table";
import Item from "./Item.js"

const ItemsList = props => {
  const { items } = props;

  const listItems = () => {
    if (items) {
      return items.map(item => {
        const {name, quantity} = item;
        return <Item key={name} name={name} quantity={quantity} />
      }
      );
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>{listItems()}</tbody>
      </Table>
    </>
  );
};

export default ItemsList;
