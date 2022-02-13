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

  function disableButton() {
    if (!iphoneMoney || !childMoney || childMoney < iphoneMoney) {
      return true;
    }
    return false;
  }

  return (
    <>
      <h1>Child Component </h1>
      <h2>Received Money: {childMoney}</h2>
      <input value={iphoneMoney} onChange={handleChange} />
      <button onClick={handleClick} disabled={disableButton()}>
        Send Remaining Money{' '}
      </button>
    </>
  );
}
