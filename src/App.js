import React, {useReducer, createContext} from 'react'
import './App.css'
import ComponentOne from './components/ComponentOne'

export const OperationContext = createContext()

let initialState = {
    incdecCounter: 0
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'valueincrement':
            return {...state, incdecCounter: state.incdecCounter + action.value}
        case 'valuedecrement': 
             return {...state,incdecCounter: state.incdecCounter - action.value}
        case 'valuereset': 
             return initialState
             default:
                 return state
    }

}

const App = () => {
    const[trueValue,dispatch]=useReducer(reducer,initialState)

  return (
    <OperationContext.Provider value={{countState: trueValue, counterDispatch: dispatch}}>
    <div className='app'>
     <h3>Result Counter - <span>{trueValue.incdecCounter}</span></h3> 
      <ComponentOne/>
    </div>
    </OperationContext.Provider>
    
  )
}

export default App
