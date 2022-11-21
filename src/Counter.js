import{useState} from"react";
function Counter() {
    const [count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldcount){
                return oldcount+1
            }
        )
    }
    function reset(){
        setCount(
            function(){
                return 1
            }
        )
    }
    return (
        <div>
            <h1>count is at {count}</h1>
            <button onClick={incr}>Click to add 1 to counter</button>
            <p/>
            <button onClick={reset}>Click to reset counter</button>
        </div>
      );
    }
    
    export default Counter;
    
  