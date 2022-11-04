//Use Redux State and Actions in React Components
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  decrement, 
  increment, 
  incrementByAmount,
  incrementAsync,
  selectCount, 
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  //can read data from the store with useSelector, and dispatch actions using useDispatch
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2');

return (
  <div>
    <div className={styles.row}>
        <button
          className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
    <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
  </div>
)
}
//Now, any time you click the "Increment" and "Decrement buttons:

//The corresponding Redux action will be dispatched to the store
//The counter slice reducer will see the actions and update its state
//The <Counter> component will see the new state value from the store and re-render itself with the new data