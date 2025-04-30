import { useState } from 'react'
import "./App.css" ;
function Toss(){
  const [choice, setchoice] = useState(null);
  const [result, setResult] = useState(null);
  const tossCoin = (choice) =>{
    const outcome = Math.random() < 0.5 ? "heads" : "tails";
    setResult(outcome);
    if(outcome === choice){
      alert("you win");
    }
    else{
      alert("you lose");
    }
  }
  return(
    <div className='container'>
      <h1>Heads or Tails?</h1>
      <button onClick={() => tossCoin("heads")}>Heads</button>
      <button onClick={() => tossCoin("tails")}>Tails</button>
      {<p>Result: {result}</p>}
    </div>
  )
}
export default Toss;