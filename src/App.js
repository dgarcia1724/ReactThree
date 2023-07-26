import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Hi lol :D</h1>
      <p>(logo here)</p>
    </header>
  );
}

function Body() {
  return (
    <main>
      <Pizza />
      <h2>This is a thing.</h2>
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="lol" />
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
    </div>
  );
}

function Footer() {
  return <h1>Footer lol</h1>;
}

export default App;
