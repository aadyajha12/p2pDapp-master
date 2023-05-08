// Import React, useState from React, and ethers from the ethers library
import React, { useState } from "react";
import { ethers } from "ethers";

// Define the AdminPanel component, accepting contract and account props
const AdminPanel = ({ contract, account }) => {
  // Declare state variables for newLender and newAdmin
  const [newLender, setNewLender] = useState("");
  const [newAdmin, setNewAdmin] = useState("");
  // Initialize the provider using the window.ethereum object
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Request access to user's Ethereum accounts
  provider.send("eth_requestAccounts", []);

  // Define a function to add a new lender
  const handleAddLender = async () => {
    // Populate a transaction object for adding the new lender
    const tx = await contract.populateTransaction.addApprovedLender(newLender);
    // Get the signer from the provider
    const signer = await provider.getSigner();
    // Send the transaction
    const signedTx = await signer.sendTransaction(tx);
    console.log(signedTx);
    // Update the contract's state by adding the new lender
    await contract.addApprovedLender(newLender);

    // Clear the newLender input
    setNewLender("");
  };

  // Define a function to remove a lender
  const handleRemoveLender = async (lender) => {
    await contract.removeApprovedLender(lender);
  };

  // Define a function to add a new admin
  const handleAddAdmin = async () => {
    await contract.addAdmin(newAdmin);
    setNewAdmin("");
  };

  // Define a function to remove an admin
  const handleRemoveAdmin = async (admin) => {
    await contract.removeAdmin(admin);
  };

  // Return the component's JSX
  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Add Approved Lender</h3>
        <label htmlFor="new-lender">Lender Address: </label>
        <input
          type="text"
          id="new-lender"
          value={newLender}
          onChange={(e) => setNewLender(e.target.value)}
        />
        <button onClick={handleAddLender}>Add Lender</button>
      </div>
      <div>
        <h3>Remove Approved Lender</h3>
        <ul>
          {Object.keys(contract.approvedLenders).map((lender) => (
            <li key={lender}>
              {lender}{" "}
              {lender !== account && (
                <button onClick={() => handleRemoveLender(lender)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Add Admin</h3>
        <label htmlFor="new-admin">Admin Address: </label>
        <input
          type="text"
          id="new-admin"
          value={newAdmin}
          onChange={(e) => setNewAdmin(e.target.value)}
        />
        <button onClick={handleAddAdmin}>Add Admin</button>
      </div>
      <div>
        <h3>Remove Admin</h3>
        <ul>
          {Object.keys(contract.admins).map((admin) => (
            <li key={admin}>
              {admin}{" "}
              {admin !== account && (
                <button onClick={() => handleRemoveAdmin(admin)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
