import React from "react";

const Content = () => {
  //convention to start functions with handle
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
};

export default Content;
