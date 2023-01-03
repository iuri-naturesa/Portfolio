import Navbar from "./componentes/navbar/Navbar";
import First from "./componentes/First/First";
import Sobre from "./componentes/Sobre/Sobre";
import Skills from "./componentes/Skills/Skills";
import Portfolio from "./componentes/Portfolio/Portfolio";
import Contato from "./componentes/Contato/Contato";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <First />
      <Sobre />
      <Skills />
      <Portfolio />
      <Contato />
    </div>
  );
}

export default App;
