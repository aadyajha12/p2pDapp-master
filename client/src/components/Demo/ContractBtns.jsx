// Import useState from React
import { useState } from "react";
// Import useEth from the EthContext
import useEth from "../../contexts/EthContext/useEth";

// Define the ContractBtns component that accepts a setValue prop
function ContractBtns({ setValue }) {
  // Destructure contract and accounts from the EthContext state
  const { state: { contract, accounts } } = useEth();
  // Declare inputValue state variable
  const [inputValue, setInputValue] = useState("");

  // Define a function to handle input changes
  const handleInputChange = e => {
    // Allow only digits or an empty string as input value
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  // Define an async function to read the contract value
  const read = async () => {
    const value = await contract.methods.read().call({ from: accounts[0] });
    setValue(value);
  };

  // Define an async function to write a new value to the contract
  const write = async e => {
    // Do nothing if the event target is an input element
    if (e.target.tagName === "INPUT") {
      return;
    }
    // Show an alert if inputValue is empty
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    // Parse inputValue as an integer
    const newValue = parseInt(inputValue);
    // Call the contract's write method with the new value
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  // Return the component's JSX
  return (
    <div className="btns">
      {/* Button to trigger the read function */}
      <button onClick={read}>
        read()
      </button>
      {/* Container with an input field to write a new value */}
      <div onClick={write} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>
    </div>
  );
}

// Export the ContractBtns component
export default ContractBtns;