import Button from "../components/Button";
import useCounterHook from "../hooks/use-counter-hook";

function CounterPage({ intialCount }) {
  const { count, incrementCounter } = useCounterHook(intialCount);

  return (
    <div className="text-center">
      <h1 className="mb-6">Counter is {count}</h1>
      <Button primary onClick={incrementCounter}>
        Click me to increase count!
      </Button>
    </div>
  );
}

export default CounterPage;
