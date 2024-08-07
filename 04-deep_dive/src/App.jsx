import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <Examples />
      <main>
        <CoreConcepts />
      </main>
    </>
  );
}

export default App;
