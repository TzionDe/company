import{useState} from"react";
function Counter() {
    const [count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldcount){
                return oldcount+1
            }
        )
        console.log(count)
    }
    return (
        <div>
            <p>count is at {count}</p>
            <button onClick={incr}>Click to add 1 to counter</button>
        </div>
      );
    }
    
    export default Counter;
    
  