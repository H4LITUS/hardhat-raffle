require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-solhint")
require("@nomiclabs/hardhat-ethers")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://nothing"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xsecretKey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "ethKey"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "COINSSS"

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.9" },
            //{ version: "0.8.7" }
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            chainId: 4,
            accounts: [PRIVATE_KEY],
            blockConfirmations: 4,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            // 4: 1, // account[1] on rinkeby(chaidId:4)
        },
        player: {
            default: 1,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: false,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    mocha: {
        timeout: 600000, //400 sec
    },
}
