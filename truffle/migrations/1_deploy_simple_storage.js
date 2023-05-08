// Run: truffle migrate --network development
const PeerToPeerLending = artifacts.require("PeerToPeerLending");

module.exports = function (deployer) {
  deployer.deploy(PeerToPeerLending);
};
