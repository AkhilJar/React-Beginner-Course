import React from "react";

const Header = () => {
  //can write in line style or can create style "objects" that have attributes and then link later
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
  };

  return (
    <header style={headerStyle}>
      <h1>Groceries List</h1>
    </header>
  );
};

//need to make sure you are exporting the component (which is a function)
export default Header;
