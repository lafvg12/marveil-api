import "./App.css";
import { Character } from "./components/Character";
import { Header } from "./components/Header";
import InputSearch from "../src/components/InputSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Search your character</h2>
      <InputSearch />
      <Character />
    </div>
  );
}

export default App;
