import React, { useState } from 'react';

export default function Child({ childMoney, receivedMoney }) {
  const [iphoneMoney, setIphoneMoney] = useState(0);
  function handleChange(event) {
    setIphoneMoney(event.target.value);
  }

  function handleClick() {
    const remainingMoney = childMoney - iphoneMoney;
    receivedMoney(remainingMoney);
  }
  return (
    <>
      <h1>Child Component </h1>
      <h2>Received Money: {childMoney}</h2>
      <input value={iphoneMoney} onChange={handleChange} />
      <button onClick={handleClick}>Send Remaining Money </button>
    </>
  );
}
