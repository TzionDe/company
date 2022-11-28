import{useState} from"react";
function Counter() {
    const [count, setCount] = useState(1)
    const[delta,setDelta]=useState(1)

    function incr(){
        setCount(
            function(oldcount){
                return oldcount+delta
            }
        )
    }
    function reset(){
        setCount(0)
    }
    function handleDelta(e){
        setDelta(Number(e.target.value))
    }

    return (
        <div>
            <h1>Counter</h1>
            <input type="number" value={delta} onChange={handleDelta}></input>
            <h3>counter is at {count}</h3>
            <button onClick={incr}>Click to add {delta} to counter</button>
            <p/>
            <button onClick={reset}>Click to reset counter</button>
        </div>
      );
    }
    
    export default Counter;
    
  