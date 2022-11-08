require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "417a1a6523e99b000a29a26806c4cdf16d17cf8cbf6f6b0bfee34cff711da577"

module.exports = {
  solidity: "0.8.9",
  networks: {
  	goerli: {
  		url: `https://holy-winter-ensemble.ethereum-goerli.discover.quiknode.pro/3ed4afb6a88b737572c3e61fafcda560e177aaeb/`,
  		accounts: [`0x${Private_Key}`]
  	}
  }
};