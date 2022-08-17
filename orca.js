const Web3 = require("web3");
var web3 = new Web3("https://api.mainnet-beta.solana.com");

function addLiquidity() {
  const txHash =
    "3vvCQdHxGkrGV9pJAZkDrX8jQ8vhZ2s4D4xtL8mUvUVEenJ9EYAv58GStGkDEfLVpYBG4SsxdpotxHvckYe525p9";
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    // token 1 io
    console.log(txResult);
  });
}
addLiquidity();
