import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );

  function Counter() {
    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1);

    const date = new Date("june 8 2024");
    date.setDate(date.getDate() + count);

    return (
      <>
        <button onClick={() => setStep((c) => c - 1)}> - </button>
        <span>Step : {step} </span>
        <button onClick={() => setStep((c) => c + 1)}> + </button>
        <br />
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span>Count : {count} </span>

        <button onClick={() => setCount((c) => c + step)}> + </button>
        <br />
        <span>
          {count === 0
            ? "Todays is "
            : count > 0
            ? `${count} days from now will be `
            : `${count} days ago was `}
        </span>

        <span> {date.toDateString()} </span>
      </>
    );
  }
}
