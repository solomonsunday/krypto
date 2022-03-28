//https://eth-ropsten.alchemyapi.io/v2/yvqc5fG3fOIsqlqVURigOjTFSInANrIN


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/yvqc5fG3fOIsqlqVURigOjTFSInANrIN',
      accounts: ['6da88c98c03d7cbf519ebdd04acd84943a26a7c3f9f075e72b0a164f4e6ee64a']
    }
  }
}

// 0x301994Fc7AC608d14991A6622E18c5351756Fddf