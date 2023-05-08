import React from 'react';

// LoanDetail component for displaying loan information
const LoanDetail = ({ loan }) => {
  return (
    <div>
      <h2>Loan Details</h2>
      {/* Display loan ID */}
      <p>ID: {loan.id}</p>
      {/* Display borrower address */}
      <p>Borrower: {loan.borrower}</p>
      {/* Display loan amount */}
      <p>Amount: {loan.amount}</p>
      {/* Display interest rate */}
      <p>Interest Rate: {loan.interestRate}</p>
      {/* Display loan duration */}
      <p>Duration: {loan.duration}</p>
      {/* Display if collateral is provided */}
      <p>Collateral Provided: {loan.collateralProvided ? 'Yes' : 'No'}</p>
      {/* Display if loan is approved */}
      <p>Approved: {loan.approved ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default LoanDetail;