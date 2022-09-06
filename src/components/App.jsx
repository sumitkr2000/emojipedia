import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEmoji(element) {
  return (
    <Entry
      key={element.id}
      emoji={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
