// Import React, useState, Table, and Button from the React and react-bootstrap libraries
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

// Define the InvestorDashboard component, taking loans as a prop
const InvestorDashboard = ({ loans }) => {
  // Declare the state variable selectedLoan and its setter, setSelectedLoan
  const [selectedLoan, setSelectedLoan] = useState(null);

  // Define a function to handle loan selection
  const handleLoanSelect = (loan) => {
    setSelectedLoan(loan);
  };

  // Return the component's JSX
  return (
    <div>
      <h2>Investor Dashboard</h2>
       {/* Create a Table component to display loan details */}
      <Table striped bordered hover>
        <thead>
          <tr>
             {/* Define table headers */}
            <th>Loan ID</th>
            <th>Borrower</th>
            <th>Amount</th>
            <th>Interest Rate</th>
            <th>Duration</th>
            <th>Collateral Provided</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {/* Iterate over loans and create a table row for each loan */}
          {loans.map((loan, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{loan.borrower}</td>
              <td>{loan.amount}</td>
              <td>{loan.interestRate}</td>
              <td>{loan.duration}</td>
              <td>{loan.collateralProvided ? "Yes" : "No"}</td>
              <td>{loan.approved ? "Approved" : "Pending"}</td>
              <td>
                 {/*Create a Button to approve or show approval status of each loan */}
                <Button
                  variant="primary"
                  onClick={() => handleLoanSelect(loan)}
                  disabled={loan.approved}
                >
                  {loan.approved ? "Approved" : "Approve"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

       {/* If a loan is selected, display its details */}
      {selectedLoan && (
        <div>
          <h3>Loan Details</h3>
          <p>Borrower: {selectedLoan.borrower}</p>
          <p>Amount: {selectedLoan.amount}</p>
          <p>Interest Rate: {selectedLoan.interestRate}</p>
          <p>Duration: {selectedLoan.duration}</p>
          <p>Collateral Provided: {selectedLoan.collateralProvided ? "Yes" : "No"}</p>
           {/* Create a Button to return to the loan list*/}
          <Button variant="success" onClick={() => handleLoanSelect(null)}>
            Back to Loan List
          </Button>
        </div>
      )}
    </div>
  );
};

// Export the InvestorDashboard component
export default InvestorDashboard;