// Import useState from React
import { useState } from "react";
// Import useEth from the EthContext
import useEth from "../../contexts/EthContext/useEth";
// Import components for the demo
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

// Define the Demo component
function Demo() {
  // Destructure state from the EthContext
  const { state } = useEth();
  // Declare value state variable
  const [value, setValue] = useState("?");

  // Define the demo JSX
  const demo = (
    <>
      <Cta />
      <div className="contract-container">
        <Contract value={value} />
        <ContractBtns setValue={setValue} />
      </div>
      <Desc />
    </>
  );

  // Return the component's JSX
  return (
    <div className="demo">
      <Title />
      {
        // Conditionally render components based on the state
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

// Export the Demo component
export default Demo;

