import React from "react";

function App() {
  var store;
  const [name, setName] = React.useState("");
  const [heading, headingText] = React.useState("");

  function x(event) {
    setName(event.target.value);
  }
  function handleChange() {
    headingText(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input
        onChange={x}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}

export default App;
