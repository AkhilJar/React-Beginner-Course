import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";

//function to create components, arrow function usually
function App() {
  //can write HTML and javascript = JS
  //JSX is template for component layout; renders as text
  const name = "Dave";

  return (
    //class reserved so use className for attribute
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
