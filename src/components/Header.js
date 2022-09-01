import React from "react";

const Header = () => {
  const headerStyles = {
    height: "12rem",
    backgroundColor: "lightGray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className='mb-3 header'>
      <h1>Registro de pedidos</h1>
    </div>
  );
};

export default Header;
