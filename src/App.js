import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { bindActionCreators } from "redux";
import { actionCreator } from "./store/index";

function App() {
  const state = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { deposit, take } = bindActionCreators(actionCreator, dispatch);
  console.log(state);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => deposit(1000)}>deposit</button>
      <button onClick={() => take(500)}>take</button>
    </div>
  );
}

export default App;
