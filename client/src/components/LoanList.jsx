import React from "react";
import { Link } from "react-router-dom";

// LoanList component for displaying a list of loans
const LoanList = ({ loans }) => {
  return (
    <div>
      <h2>Loan List</h2>
      <table>
        <thead>
          {/* Table header */}
          <tr>
            <th>Borrower</th>
            <th>Amount</th>
            <th>Interest Rate</th>
            <th>Duration (Days)</th>
            <th>Collateral Provided</th>
          </tr>
        </thead>
        <tbody>
          {/* Display a message when there are no loans */}
          {loans.length === 0 && (
            <tr>
              <td colSpan="5">No loans found.</td>
            </tr>
          )}
          {/* Render a table row for each loan */}
          {Array.isArray(loans) &&
            loans.map((loan) => (
              <tr key={loan.id}>
                {/* Link to loan details */}
                <td>
                  <Link to={`/loans/${loan.id}`}>{loan.borrower}</Link>
                </td>
                <td>{loan.amount} ETH</td>
                <td>{loan.interestRate}%</td>
                <td>{loan.duration}</td>
                <td>{loan.collateralProvided ? "Yes" : "No"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanList;