import React, { useEffect, useState, useContext, createContext } from "react";
import UseRef from "./UseRef";
import { useNavigate } from "react-router-dom";
import UseParamHook from "./UseParamHook";
import First from "./First";
import UseReducerHook from "./UseReducerHook";
import UsereducerForm from "./UsereducerForm";

export const Pass = createContext();

const UseEffect1 = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  const name = "Hari";

  useEffect(() => {
    console.log("this effect will run after every render");
  });

  useEffect(() => {
    console.log("this effect will run only on intial render");
  }, []);

  useEffect(() => {
    console.log("this effect will run only dependency or that state change");
  }, [count]);

  //usenavagate()

  const page = useNavigate();

  useEffect(() => {
    if (count >= 4) {
      page("/product");
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => page("/product")}>to product page</button>
      <UsereducerForm />
      <UseReducerHook />
      <h1>
        Count - {count} {count1}
      </h1>

      <button onClick={() => setCount(count + 1)}> Increase</button>
      <button onClick={() => setCount1(count1 - 1)}> Decrease</button>

      <h2>UseRef hook</h2>
      <div style={{ padding: "20px", border: "5px solid black" }}>
        App component {name}
        <Pass.Provider value={name}>
          <First />
        </Pass.Provider>
      </div>

      <UseRef />
      <UseParamHook />
    </div>
  );
};

export default UseEffect1;
