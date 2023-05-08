// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../contracts/SimpleStorage.sol";
// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

// Define a new contract named "SimpleStorageTest" that contains test cases for the SimpleStorage contract.
contract SimpleStorageTest {

  // Define a new test case that checks if the SimpleStorage contract can store and retrieve values correctly.
  function testWriteValue() public {
    // Create an instance of the SimpleStorage contract.
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    // Verify that the initial value of the contract is 0. If the value is not 0, it will fail the test case.
    Assert.equal(simpleStorage.read(), 0, "Contract should have 0 stored");

    // Write a new value to the contract.
    simpleStorage.write(1);
    // Verify that the new value is correctly stored in the contract.
    Assert.equal(simpleStorage.read(), 1, "Contract should have 1 stored");

    // Write another new value to the contract.
    simpleStorage.write(2);
    // Verify that the new value is correctly stored in the contract.
    Assert.equal(simpleStorage.read(), 2, "Contract should have 2 stored");
  }
}
