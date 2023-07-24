import React from '../lib/react.js'
import { useSelector } from '../lib/react-redux'

export function Count(){
    const counter = useSelector((state) => state.value)

    React.useEffect(() => {
        console.log("Called")
    }, [])
  
    return <h1>{counter}</h1>
}
  