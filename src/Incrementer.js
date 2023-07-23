import React from '../lib/react.js'
import { useDispatch } from '../lib/react-redux'

export function Incrementer(){
    const dispatch = useDispatch();

    const increment = () => {
      dispatch({
        type: 'counter/increment'
      })
    }

    return (
      <button onClick={increment} >
        Add
      </button>
    )
  }