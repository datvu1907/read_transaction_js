const InputDataDecoder = require("ethereum-input-data-decoder");
const Web3 = require("web3");
var web3 = new Web3("https://rpc.ftm.tools");

function addLiquidityETH() {
  const txHash =
    "0x384e9c41584cd296cead97e64c32726d03698496c26dec47b50d61f99f7f6346";
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    // token 1 in
    console.log(txResult.logs[0].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[0].data)); //amount
    console.log(txResult.logs[0].topics[1]); // from
    console.log(txResult.logs[0].topics[2]); // to

    // token 2 in
    console.log(txResult.logs[2].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[2].data)); //amount
    console.log(txResult.logs[2].topics[1]); // from
    console.log(txResult.logs[2].topics[2]); // to
  });
}
function swap() {
  const txHash =
    "0xd7053a65bd08fd6e05a40c816080a71fe5eb3ecadcc0b16f7190b41b0d7a06d4";
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    // token in
    console.log(txResult.logs[0].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[0].data)); //amount
    console.log(txResult.logs[0].topics[1]); // from
    console.log(txResult.logs[0].topics[2]); // to

    // token out
    console.log(txResult.logs[1].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[1].data)); //amount
    console.log(txResult.logs[1].topics[1]); // from
    console.log(txResult.logs[1].topics[2]); // to
  });
}
swap();
