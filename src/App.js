import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JavaScript Framework",
  },
  {
    title: "Why use React",
    content: "React is a favourite JS library among Engineers",
  },
  {
    title: "How do you use React",
    content: "By Creating Components",
  },
];

const options = [
  {
    label: "The Red Color",
    value: "Red",
  },
  {
    label: "The Green Color",
    value: "Green",
  },
  {
    label: "A shade of Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
