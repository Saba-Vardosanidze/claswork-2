import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="buttonContainer">
        <Button mybtn="Sign Up" />
        <Button mybtn="Log In" />
      </div>
      <Card />
    </div>
  );
}

export default App;
