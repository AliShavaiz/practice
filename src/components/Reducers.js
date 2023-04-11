import React, { useReducer } from 'react'

const Reducers = () => {

    const reducer = (state, action) => {
        switch(action)
        {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return state = 0
        }
    }
    const initialState = 0;
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button className='btn btn-primary' onClick={() => dispatch('increment')}> Increment </button>
      <button className='btn btn-primary' onClick={() => dispatch('decrement')}> Decrement </button>
      <button className='btn btn-primary' onClick={() => dispatch('reset')}> Reset </button>

      <h3> count : {count} </h3>

    </div>
  )
}

export default Reducers
