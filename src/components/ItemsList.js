import React from "react";
import Table from "react-bootstrap/Table";

const ItemsList = props => {
  const { items } = props;

  const listItems = () => {
    if (items) {
      return items.map(item => (
        <tr key={item.name}>
          <td>{`${item.name}`}</td>
          <td>{`${item.quantity}`}</td>
        </tr>
      ));
    }
  };

  return (
    <>
      <h2>Lista de itens</h2>
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
