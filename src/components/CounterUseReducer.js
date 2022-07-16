import React, {useReducer} from 'react'
const initialState = 0

const reducer = (state, action) => {

    switch (action) {
        case 'increment':
            return state  + 1
        case 'decrement':
            return state  - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterUseReducer() {
  const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div>Count is {count}</div>
            <button onClick={() =>dispatch('increment')}> Increment Counter</button>
            <button onClick={() =>dispatch('decrement')}> Decrement Counter</button>
            <button onClick={() =>dispatch('reset')}> Reset Counter</button>
        </div>
    )
}
export default CounterUseReducer