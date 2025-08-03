import "./App.css";

//Components
import Header from "./Components/Header";
import Navigation from "./Components/navigation";

//Pages
import About from "./Pages/About";
import Awards from "./Pages/Awards";
import Еxperience from "./Pages/Еxperience";
// import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Awards />
      <Еxperience />
      {/* <Projects /> */}
      <Contacts />
    </div>
  );
}

export default App;
