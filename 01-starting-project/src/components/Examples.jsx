import TapButton from ".//TapButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic</p>;

  function handleClick(selectedButton) {
    // components, jsx, props, state
    setSelectedTopic(selectedButton);
  }

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
  );
}
