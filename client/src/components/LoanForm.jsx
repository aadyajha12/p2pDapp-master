import React, { useState } from 'react';
import { ethers } from 'ethers';
import PeerToPeerLending from '../contracts/PeerToPeerLending.json';

// LoanForm component for submitting loan requests
const LoanForm = ({ onSubmit }) => {
  // Set up state for form fields and error message
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [collateralProvided, setCollateralProvided] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update state on input changes
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleCollateralProvidedChange = (e) => {
    setCollateralProvided(e.target.checked);
  };

  // Handle form submission and pass data to onSubmit callback
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      await onSubmit(amount, interestRate, duration, collateralProvided);
    }
    catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Render the form and display any error message
  return (
    <div>
      <h2>Create a New Loan Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Loan amount input */}
        <label>
          Amount (in ETH):
          <input type="number" step="0.01" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        {/* Interest rate input */}
        <label>
          Interest Rate:
          <input type="number" step="0.01" value={interestRate} onChange={handleInterestRateChange} />
        </label>
        <br />
        {/* Loan duration input */}
        <label>
          Duration (in days):
          <input type="number" value={duration} onChange={handleDurationChange} />
        </label>
        <br />
        {/* Collateral provided checkbox */}
        <label>
          Collateral Provided:
          <input type="checkbox" checked={collateralProvided} onChange={handleCollateralProvidedChange} />
        </label>
        <br />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      {/* Error message display */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default LoanForm;