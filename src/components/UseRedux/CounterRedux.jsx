import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <h4>Counter Redux: {count}</h4>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
