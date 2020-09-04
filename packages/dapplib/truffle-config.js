require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan reflect still modify give kite metal gentle'; 
let testAccounts = [
"0x49af55aa184313c828f47171fd4b4f829d54a5e43aa46cca53be3bfab880d834",
"0x818d2628e6abd367123804d1612945e6bc97be0234d9a097a94139eff19165ff",
"0xe592b588db7d869d3a3d20ed517773322df37af5fb5a794ac873b148396415e3",
"0xf1eedb5b6cbb98d8cb45bea80536d4499b765f8a5650d3af9a48135b9e484351",
"0x9e0fcf5a42fd3ee3b1fba831d71ace07013ec13116ced7d29dc16b46aad0f0dd",
"0x02de04622bda1f859d23032d806b347b4ab8ac584ff2c9a59a2e9dfbb5df35cf",
"0xe118f02883d866bd2e6d6dfe865ee860343e48e1dbd0d7c5e9e54bd7987a6792",
"0xd8699fe628a900ba41b365dc23b933257d8baf287e732f34117fbbd60ad44030",
"0x09563d2f059752cdc7c04299a8b079f095a1a9e6751bf8d8cec6eebe578b02de",
"0x69a69a8c470d2161f348663ecd97f618503f59438aee1545fbf0f4ee6f01c269"
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
            version: '^0.5.11'
        }
    }
};
