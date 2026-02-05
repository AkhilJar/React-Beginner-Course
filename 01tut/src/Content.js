import { useState } from "react";

const Content = () => {
  //var, function to change = default
  const [name, setName] = useState("Akhil");
  const [count, setCount] = useState(0);
  //convention to start functions with handle
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  //function to handle click
  //useState updates in batches/renders
  //won't render all at once !!!ISSUE
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    //Solution: setCount(count => count + 1);
    console.log(count);
  };

  //backticks and $ to add var
  const handleClick2 = () => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      {/* anon function is called when button clicked which calls another function */}
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  );
};

export default Content;
