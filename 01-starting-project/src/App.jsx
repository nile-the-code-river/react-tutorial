import { useState } from "react";

import Header from "./components/Header/Header.jsx";

import { EXAMPLES } from "./data.js";

import { CORE_CONCEPTS } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CoreConcepts2 } from "./components/CoreConcepts.jsx";

import TapButton from "./components/TapButton.jsx";

function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // components, jsx, props, state
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic != null) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton
              isSelected={selectedTopic === "components"}
              onClickEvent={() => handleClick("components")}
            >
              Component
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "jsx"}
              onClickEvent={function () {
                handleClick("jsx");
              }}
            >
              JSX
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "props"}
              onClickEvent={() => handleClick("props")}
            >
              Props
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "state"}
              onClickEvent={() => handleClick("state")}
            >
              State
            </TapButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
