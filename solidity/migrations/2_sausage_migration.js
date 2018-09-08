const SausageTokens = artifacts.require("./SausageTokens.sol");

module.exports = async function(deployer) {
  await deployer.deploy(SausageTokens, "SausageTokens", "SausageTokens")
  const sausage = await SausageTokens.deployed()
};