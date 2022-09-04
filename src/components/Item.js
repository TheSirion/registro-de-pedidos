import React from "react";

const Item = props => {
  const { name, amount } = props;
  return (
    <tr key={name}>
      <td>{`${name}`}</td>
      <td>{`${amount}`}</td>
    </tr>
  );
};

export default Item;
