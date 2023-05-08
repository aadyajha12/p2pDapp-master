// Import useRef and useEffect from React
import { useRef, useEffect } from "react";

// Define the Contract component
function Contract({ value }) {
  // Create a ref for the span element
  const spanEle = useRef(null);

  // Add a side effect that triggers when the value prop changes
  useEffect(() => {
    // Add the "flash" class to the span element
    spanEle.current.classList.add("flash");
    
    // Set a timeout to remove the "flash" class after 300 milliseconds
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);

    // Clean up the effect by clearing the timeout when the component is unmounted or the value prop changes
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  // Return the component's JSX
  return (
    <code>
      {`contract SimpleStorage {
  uint256 value = `}

      {/* Render the value prop in a span element */}
      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
  }
}`}
    </code>
  );
}

// Export the Contract component
export default Contract;