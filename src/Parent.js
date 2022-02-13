import { useState } from 'react';
import React from 'react';
import Child from './Child';

export default function Parent() {
  const [childMoney, setChildMoney] = useState(0);
  const [gotMoney, setGotMoney] = useState(0);

  function handleOnChange(event) {
    setChildMoney(event.target.value);
  }
  function updatedReceivedMoney(gotMoney) {
    setGotMoney(gotMoney);
  }
  return (
    <div>
      <h1>Parent Component </h1>
      <h3>MoneyGot : {gotMoney}</h3>
      <input value={childMoney} onChange={handleOnChange} />
      <Child childMoney={childMoney} receivedMoney={updatedReceivedMoney} />
    </div>
  );
}
