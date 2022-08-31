import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemsList = (props) => {
  const { items } = props;

  const listItems = () => {
    if (items) {
      console.log(items)
      return items.map((item) => <ListGroup.Item key={item.name}>{`${item.name}: ${item.quantity}`}</ListGroup.Item>);
    }
  };

  return (
    <>
      <h2>Lista de itens</h2>
      <ListGroup>{listItems()}</ListGroup>
    </>
  );
};

export default ItemsList;
