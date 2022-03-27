const Migrations = artifacts.require("Migrations");
const SwapeeRouter = artifacts.require("SwapeeV2Router02");



module.exports = async function (deployer) {
  deployer.deploy(SwapeeRouter, "0xa909e0A130D6adBF5C0e14fA1Aa7DD676e980407", "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7");
};

