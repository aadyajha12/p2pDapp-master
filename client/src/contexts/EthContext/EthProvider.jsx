import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";

// EthProvider component to provide Ethereum related functionality to child components
function EthProvider({ children }) {
  // Use a reducer for state management
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initialize the Ethereum connection
  const init = useCallback(
    async artifact => {
      if (artifact) {
        // Create a Web3 instance
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        // Request user accounts
        const accounts = await web3.eth.requestAccounts();
        // Get the current network ID
        const networkID = await web3.eth.net.getId();
        const { abi } = artifact;

        let address, contract;
        try {
          address = artifact.networks[networkID].address;
          contract = new web3.eth.Contract(abi, address);
        } catch (err) {
          console.error(err);
        }

        // Dispatch the init action to update the state
        dispatch({
          type: actions.init,
          data: { artifact, web3, accounts, networkID, contract }
        });
      }
    }, []);

  // Initialize the Ethereum connection when the component is mounted
  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require("../../contracts/SimpleStorage.json");
        init(artifact);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  // Reinitialize the Ethereum connection when certain events occur
  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifact]);

  return (
    // Provide the state and dispatch function to child components
    <EthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;