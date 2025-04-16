import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
};

export default Counter;