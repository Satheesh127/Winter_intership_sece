import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, edit } from "../../slice/counterslice";

function Counter() {
  const selector = useSelector((state) => state.counter);
  console.log(selector);

  const dispatch = useDispatch();

  function getvalue() {
    return parseInt(prompt("enter the value ! "));
  }

  return (
    <div className="content">
      <h1>Counter Application</h1>
      <p>Value : {selector.count}</p>
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          <span className="material-symbols-outlined">add</span>
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          <span className="material-symbols-outlined">remove</span>
        </button>
        <button className="btn" onClick={() => dispatch(edit(getvalue()))}>
        <span className="material-symbols-outlined">edit</span>
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
        <span className="material-symbols-outlined">history</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
