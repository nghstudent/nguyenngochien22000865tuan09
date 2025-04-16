import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <h1>Counter Redux: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
