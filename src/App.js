import React from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

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

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
