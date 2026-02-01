import logo from "./logo.svg";
import "./App.css";

//function to create components, arrow function usually
function App() {
  //can write HTML and javascript = JS
  //JSX is template for component layout; renders as text
  const name = "Dave";

  //convention to start functions with handle
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    //class reserved so use className for attribute
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}</p>
        <p>Hello {name}!</p>
        {/* Curly script means this is a javascript expression 
            - useful because it parses as text 
            - booleans and objects don't render
        */}
        {/* <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
