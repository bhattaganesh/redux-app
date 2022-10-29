import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {incrementer,decrementer} from './Actions/index'
function App() {
  const state = useSelector((state) => state.numberIncrementerDecrementer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-project-wrapper">
        <div className="project-6-page-wrapper">
          <h2>React Redux Incrementer/Decrementer App</h2>
          <div className="project-6-wrapper">
            <div className="counter-box-wrapper">
              <div className="counter-number" id="counter-placeholder">
                {state}
              </div>
              <button className="count-btns" id="btn-increment" onClick={()=>{dispatch(incrementer(5))}}>
                Increment
              </button>
              <button className="count-btns" id="btn-decrement" onClick={()=>{dispatch(decrementer(5))}}>
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
