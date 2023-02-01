require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy radar spider assume install lonely flock venture'; 
let testAccounts = [
"0x2e50c8f0d0abfc1a218ecf131ac69c448f2144f7a300a72cd8b9581901c5ead0",
"0x61f8bd7625637c8d61fc06748637d559ec2d3cd4379a024f8b1f6bcbd1219743",
"0x05592506b6de67e3b1c53586c0c685b4bb14e51731cb4f5bf3fac563e4992b2f",
"0x8dc913d1b47a6c2a4c095b269450160914b4d679c4fd63d63fb1e70fa1f642e6",
"0xab5c770bceb241b691441f1a213b729e36bde81465f40a807f9e15ff86f11f78",
"0x0b0743fcb58c924590ff6eb6f7c3e54c997a4810ff47041c2d0ea14930261670",
"0x4fca4013d934ac9a4484e5eee3d34060378bd0f3b2a4a47f506da69597035a98",
"0xdb12e344a257d8e96a77a3f197f5ae8b89eeb41e940580a038d0d71e661c0614",
"0xd2e39ba99a79888efea1108ee5be1ba1169f8f362bb4fff8d8c301e2172b111a",
"0x3290a0e432a97b5c60aaabdb056ae5478c3b3c72e0e1e93e2e1dd0f86c295770"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

