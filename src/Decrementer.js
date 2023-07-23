import React from '../lib/react.js'
import { useDispatch } from '../lib/react-redux'

export function Decrementer(){
    const dispatch = useDispatch();

    const decrement = () => {
      dispatch({
        type: 'counter/decrement'
      })
    }

    return (
      <button onClick={decrement} >
        Sub
      </button>
    )
  }