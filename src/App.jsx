import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import CounterConfigure from "./components/Counter/CounterConfigure.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetClick(enteredNumber) {
    setChosenCount(() => {
      console.log(enteredNumber);
      return enteredNumber;
    });
  }

  return (
    <>
      <Header />
      <main>
        <CounterConfigure onSetClick={handleSetClick} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter key={chosenCount + 1} initialCount={chosenCount + 60} />
      </main>
    </>
  );
}

export default App;
