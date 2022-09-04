import React from "react";
import Table from "react-bootstrap/Table";
import Item from "./Item.js";

const ItemsList = props => {
  const { items } = props;

  const listItems = () => {
    if (items) {
      return items.map(item => {
        const { name, amount } = item;
        return <Item key={name} name={name} amount={amount} />;
      });
    }
  };

  return (
    <>
      <Table hover>
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
