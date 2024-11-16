import React, { useState } from 'react';

function BankApp() {
  const [balance, setBalance] = useState(1000); 
  const [selectedMenu, setSelectedMenu] = useState('home'); 
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleDeposit = () => {
    setBalance(balance + depositAmount);
    setDepositAmount(0); // Clear input field
  };

  const handleWithdraw = () => {
    if (withdrawAmount <= balance) {
      setBalance(balance - withdrawAmount);
      setWithdrawAmount(0); // Clear input field
    } else {
      alert('Insufficient funds!');
    }
  };

  return (
    <div>
      <h1>Welcome to Your Bank</h1>

      <ul>
        <li onClick={() => handleMenuClick('home')}>Home</li>
        <li onClick={() => handleMenuClick('deposit')}>Deposit</li>
        <li onClick={() => handleMenuClick('withdraw')}>Withdraw</li>
      </ul>

      {selectedMenu === 'home' && (
        <div>
          <h2>Your current balance is: ${balance}</h2>
        </div>
      )}

      {selectedMenu === 'deposit' && (
        <div>
          <input 
            type="number" 
            placeholder="Enter amount" 
            value={depositAmount} 
            onChange={(e) => setDepositAmount(parseFloat(e.target.value))} 
          />
          <button onClick={handleDeposit}>Deposit</button>
        </div>
      )}

      {selectedMenu === 'withdraw' && (
        <div>
          <input 
            type="number" 
            placeholder="Enter amount" 
            value={withdrawAmount} 
            onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))} 
          />
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
      )}
    </div>
  );
}

export default BankApp;