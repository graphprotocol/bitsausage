const SausageTokens = artifacts.require("./SausageTokens.sol");
const Auction = artifacts.require("./Auction.sol");


module.exports = async function(deployer) {
  await deployer.deploy(SausageTokens, "SausageTokens", "Bratwurst")
  const sausage = await SausageTokens.deployed()
  await deployer.deploy(Auction, "0xe207259495d9de39e92e8b280a85b4d845906ce6", 1234, "Bratwurst")
  const auction = await Auction.deployed()
};





//   module.exports = function(deployer) {
//     deployer.deploy(SausageTokens, "SausageTokens", "Bratwurst").then(() => {
//      deployer.deploy(Auction, "0x2259fefc212cc383004e1f4ec280230231b8c342", 1234, "Bratwurst")
//     });
// };
