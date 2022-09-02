import React from 'react';

const Item = (props) => {
  const {name, quantity} = props;
  return (
    <tr key={name}>
      <td>{`${name}`}</td>
      <td>{`${quantity}`}</td>
    </tr>
  )
}

export default Item;