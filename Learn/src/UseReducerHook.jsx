import React,{useReducer} from 'react'

export default function UseReducerHook() {
    const initialValue={count:0}
    function reducerfun(state,action){
        switch(action.type){
            case "increment":
                return {count:state.count+1}
            case "dec":
                return {count:state.count-1}
            case "reset":
                return {count:0}
            default:
                return state
        }
    }

    const[state,dispatch]=useReducer(reducerfun,initialValue)
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>inc</button>
        <button onClick={()=>dispatch({type:"dec"})}>dec</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
      
    </div>
  )
}
