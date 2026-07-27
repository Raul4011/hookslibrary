
import { useCounter } from './hooks/useCounter'

const Counter = () => {
    const {increment,decrement,counter} = useCounter({initialValue:0})

  return (
    <div>

        <button onClick={()=>increment(2)}>+</button>
         <button onClick={()=>decrement(2)}>-</button>
        <h3>counter: {counter}</h3>


    </div>
  )
}

export default Counter