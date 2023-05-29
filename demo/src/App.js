import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from "./actions/index";

function App() {

  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch= useDispatch();
  return (
    <div className="App">
     <h1>Increment Decrement Counter</h1>

     
      <div onClick={()=>dispatch(decNumber(2))}><span>-</span></div>
      <input type="text" value={myState}/>
      <div onClick={()=>dispatch(incNumber(5))}><span>+</span></div>

     
    </div>
  );
}

export default App;
