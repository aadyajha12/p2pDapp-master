// Import the SimpleStorage contract from the artifacts directory.
const SimpleStorage = artifacts.require("SimpleStorage");

// Define a new contract test suite that tests the SimpleStorage contract.
contract('SimpleStorage', (accounts) => {
  let simpleStorageInstance;

  beforeEach(async () => {
    simpleStorageInstance = await SimpleStorage.new();
  });

  // Define a new test case that checks if the newly written values can be read correctly.
  it('should read newly written values', async() => {
    // Read the initial value from the contract instance, which is expected to be 0.
    var value = (await simpleStorageInstance.read()).toNumber();

    // Verify that the initial value of the contract is 0. If the value is not 0, it will fail the test case.
    assert.equal(value, 0, "0 wasn't the initial value");

    // Write a new value to the contract.
    await simpleStorageInstance.write(1);
    // Read the new value from the contract instance.
    value = (await simpleStorageInstance.read()).toNumber();
    // Verify that the new value is correctly stored in the contract.
    assert.equal(value, 1, "1 was not written");

    // Write another new value to the contract.
    await simpleStorageInstance.write(2);
    // Read the new value from the contract instance.
    value = (await simpleStorageInstance.read()).toNumber();
    // Verify that the new value is correctly stored in the contract.
    assert.equal(value, 2, "2 was not written");
  });
});