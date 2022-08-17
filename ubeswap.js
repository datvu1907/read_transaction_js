const InputDataDecoder = require("ethereum-input-data-decoder");
const Web3 = require("web3");
var web3 = new Web3("https://forno.celo.org");
function swapExactTokensForTokens() {
  const txHash =
    "0xbe8fc6b0c13a3849f4d0283b331692fefc1252efa5133d7cfc0a15eb6c8a482b";
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    // token  in
    console.log(txResult.logs[0].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[0].data)); //amount
    console.log(txResult.logs[0].topics[1]); // from
    console.log(txResult.logs[0].topics[2]); // to

    // token 2 in
    console.log(txResult.logs[2].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[23].data)); //amount
    console.log(txResult.logs[23].topics[1]); // from
    console.log(txResult.logs[23].topics[2]); // to
  });
}
swapExactTokensForTokens();
