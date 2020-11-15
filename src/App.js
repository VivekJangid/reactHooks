import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Header from "./Components/Header";
import Route from "./Components/Route";

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

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === "/search ") {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname == "/dropdown") {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname == "/translate") {
//     return <Translate />;
//   }
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <div>Selected Colour is {selected.value}</div>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
