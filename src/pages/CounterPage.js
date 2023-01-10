import { useReducer, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

function CounterPage({ intialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: intialCount,
    valueToAdd: 0,
  });

  const incrementCounter = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrementCount = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: Number(e.target.value),
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <div className="text-center">
      <h1 className="mb-6">Counter is {state.count}</h1>

      <div className="flex gap-3">
        <Button primary onClick={incrementCounter}>
          Increment
        </Button>
        <Button primary onClick={decrementCount}>
          Decrement
        </Button>
      </div>

      <div className="mt-3">
        <Panel>
          <form onSubmit={handleFormSubmit}>
            <input
              className="p-1 m-3 bg-gray-50 border border-gray-300"
              type="number"
              onChange={(e) => handleChange(e)}
              value={state.valueToAdd || ""}
            />
          </form>
        </Panel>
      </div>
    </div>
  );
}

export default CounterPage;
