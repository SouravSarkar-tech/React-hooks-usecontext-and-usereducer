import React, {useContext} from 'react'
import '../App.css'
import {OperationContext} from '../App'

function ComponentThree() {
    const value = useContext(OperationContext)
  return (
    <div className='box'>
       <div className='boxtwo'>
        Increment The Value By 1: <button onClick={()=>value.counterDispatch({type : 'valueincrement', value: 1})}>Increment</button> <br/><br/>
        Decrement The Value By 1: <button onClick={()=>value.counterDispatch({type : 'valuedecrement', value: 1})}>Decrement</button>
        </div>
        <div className='boxthree'>
        Increment The Value By 10: <button onClick={()=>value.counterDispatch({type : 'valueincrement', value: 10})}>Increment</button> <br/><br/>
        Decrement The Value By 10: <button onClick={()=>value.counterDispatch({type : 'valuedecrement', value: 10})}>Decrement</button>
        </div>
        <br/>
        Reset The Value: <button onClick={()=>value.counterDispatch({type : 'valuereset'})}>Reset</button>
    </div>
  )
}

export default ComponentThree
