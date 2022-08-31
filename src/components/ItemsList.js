import React from 'react';

const ItemsList = (props) => {
  const { items } = props;

  const listItems = () => {
    if (items) {
      console.log(items)
      return items.map((item) => <li key={item.name}>{`${item.name}: ${item.quantity}`}</li>);
    }
  };

  return (
    <>
      <h2>Lista de itens</h2>
      <ul>{listItems()}</ul>
    </>
  );
};

export default ItemsList;
