const InputDataDecoder = require("ethereum-input-data-decoder");
const Web3 = require("web3");
var web3 = new Web3("https://bscrpc.com");

function addLiquidity() {
  const txHash =
    "0x96c2469f894dbe5f02b93a66389ae6ef0788c394ca06f1d6cf3da66f063adc2e";
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    // token 1 in
    console.log(txResult.logs[0].address); // token address
    console.log(web3.utils.hexToNumberString(txResult.logs[0].data)); //amount
    console.log(txResult.logs[0].topics[2]); //to
    // console.log(txResult.logs[2].address);

    // token 2 in
    console.log(txResult.logs[2].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[2].data)); //  amount
    console.log(txResult.logs[2].topics[2]); //to
  });
}
function swapTokenForToken() {
  const txHash =
    "0xc72cc2951ff7df3559791ca398768515b5875818cb9c5c3ab19dc3a3b1cc3d77";
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    // token in
    console.log(txResult.logs[0].address); // token address
    console.log(web3.utils.hexToNumberString(txResult.logs[0].data)); //amount
    console.log(txResult.logs[0].topics[2]); //to
    // console.log(txResult.logs[2].address);

    // token out
    console.log(txResult.logs[2].address);
    console.log(web3.utils.hexToNumberString(txResult.logs[2].data)); //  amount
    console.log(txResult.logs[2].topics[2]); //to
  });
}
swapTokenForToken();
