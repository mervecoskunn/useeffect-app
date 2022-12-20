import {useEffect,useLayoutEffect,useState} from "react";

function App() {
  const [count,setCount] = useState(0);
  const [message,setMessage]= useState("");

  useEffect(
    ()=>{
    document.getElementById('messageArea').innerText=message;
    console.log("UseEffect works, Count: "+ count);
  
  },
  [message]
  )
  useLayoutEffect(
    ()=>{
    
    
    },
    []
    )
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Reduce</button>
      <hr/>
      <input onChange={(e)=>setMessage(e.target.value)}/>
      <p id="messageArea"></p>

    </div>
  );
}

export default App;
