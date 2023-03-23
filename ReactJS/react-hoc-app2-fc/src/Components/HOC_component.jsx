import React from 'react'
import { useState } from 'react'

const HOC_component = (OriginalComponent) => {
    const SampleComponent =() =>{
        const [count,setCount] = useState(0)
        const handleIncrement =() => {
            console.log("User clicked me !!!  " + count + " times");
            setCount(count+1)
        }
        return <OriginalComponent count={count} handleIncrement ={handleIncrement}/>
    }
  return SampleComponent
}

export default HOC_component
