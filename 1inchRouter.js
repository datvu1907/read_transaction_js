const InputDataDecoder = require("ethereum-input-data-decoder");
const Web3 = require("web3");
const ethers = require("ethers");
var web3 = new Web3(
  "https://mainnet.infura.io/v3/df935790eae94b838c450805ef5ef11b"
);
const abi = [
  {
    inputs: [
      { internalType: "address", name: "weth", type: "address" },
      {
        internalType: "contract IClipperExchangeInterface",
        name: "_clipperExchange",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "makingAmount",
        type: "uint256",
      },
    ],
    name: "OrderFilledRFQ",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LIMIT_ORDER_RFQ_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "orderInfo", type: "uint256" }],
    name: "cancelOrderRFQ",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "contract IERC20", name: "dstToken", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
    ],
    name: "clipperSwap",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "recipient", type: "address" },
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "contract IERC20", name: "dstToken", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
    ],
    name: "clipperSwapTo",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "recipient", type: "address" },
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "contract IERC20", name: "dstToken", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
      { internalType: "bytes", name: "permit", type: "bytes" },
    ],
    name: "clipperSwapToWithPermit",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "info", type: "uint256" },
          {
            internalType: "contract IERC20",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "takerAsset",
            type: "address",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "allowedSender", type: "address" },
          { internalType: "uint256", name: "makingAmount", type: "uint256" },
          { internalType: "uint256", name: "takingAmount", type: "uint256" },
        ],
        internalType: "struct LimitOrderProtocolRFQ.OrderRFQ",
        name: "order",
        type: "tuple",
      },
      { internalType: "bytes", name: "signature", type: "bytes" },
      { internalType: "uint256", name: "makingAmount", type: "uint256" },
      { internalType: "uint256", name: "takingAmount", type: "uint256" },
    ],
    name: "fillOrderRFQ",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "info", type: "uint256" },
          {
            internalType: "contract IERC20",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "takerAsset",
            type: "address",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "allowedSender", type: "address" },
          { internalType: "uint256", name: "makingAmount", type: "uint256" },
          { internalType: "uint256", name: "takingAmount", type: "uint256" },
        ],
        internalType: "struct LimitOrderProtocolRFQ.OrderRFQ",
        name: "order",
        type: "tuple",
      },
      { internalType: "bytes", name: "signature", type: "bytes" },
      { internalType: "uint256", name: "makingAmount", type: "uint256" },
      { internalType: "uint256", name: "takingAmount", type: "uint256" },
      { internalType: "address payable", name: "target", type: "address" },
    ],
    name: "fillOrderRFQTo",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "info", type: "uint256" },
          {
            internalType: "contract IERC20",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "takerAsset",
            type: "address",
          },
          { internalType: "address", name: "maker", type: "address" },
          { internalType: "address", name: "allowedSender", type: "address" },
          { internalType: "uint256", name: "makingAmount", type: "uint256" },
          { internalType: "uint256", name: "takingAmount", type: "uint256" },
        ],
        internalType: "struct LimitOrderProtocolRFQ.OrderRFQ",
        name: "order",
        type: "tuple",
      },
      { internalType: "bytes", name: "signature", type: "bytes" },
      { internalType: "uint256", name: "makingAmount", type: "uint256" },
      { internalType: "uint256", name: "takingAmount", type: "uint256" },
      { internalType: "address payable", name: "target", type: "address" },
      { internalType: "bytes", name: "permit", type: "bytes" },
    ],
    name: "fillOrderRFQToWithPermit",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "maker", type: "address" },
      { internalType: "uint256", name: "slot", type: "uint256" },
    ],
    name: "invalidatorForOrderRFQ",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "rescueFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAggregationExecutor",
        name: "caller",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "srcToken",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "dstToken",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "srcReceiver",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "dstReceiver",
            type: "address",
          },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "minReturnAmount", type: "uint256" },
          { internalType: "uint256", name: "flags", type: "uint256" },
          { internalType: "bytes", name: "permit", type: "bytes" },
        ],
        internalType: "struct AggregationRouterV4.SwapDescription",
        name: "desc",
        type: "tuple",
      },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "swap",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
      { internalType: "uint256", name: "spentAmount", type: "uint256" },
      { internalType: "uint256", name: "gasLeft", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
      { internalType: "uint256[]", name: "pools", type: "uint256[]" },
    ],
    name: "uniswapV3Swap",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "int256", name: "amount0Delta", type: "int256" },
      { internalType: "int256", name: "amount1Delta", type: "int256" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
      { internalType: "uint256[]", name: "pools", type: "uint256[]" },
    ],
    name: "uniswapV3SwapTo",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "recipient", type: "address" },
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
      { internalType: "uint256[]", name: "pools", type: "uint256[]" },
      { internalType: "bytes", name: "permit", type: "bytes" },
    ],
    name: "uniswapV3SwapToWithPermit",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
      { internalType: "bytes32[]", name: "pools", type: "bytes32[]" },
    ],
    name: "unoswap",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "srcToken", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minReturn", type: "uint256" },
      { internalType: "bytes32[]", name: "pools", type: "bytes32[]" },
      { internalType: "bytes", name: "permit", type: "bytes" },
    ],
    name: "unoswapWithPermit",
    outputs: [
      { internalType: "uint256", name: "returnAmount", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
function unoSwap() {
  const decoder = new InputDataDecoder(abi);
  const txHash =
    "0x12de4f3bf34ac8a02364a8002060653aab6c1ff85893423d140fa70230286f09";
  web3.eth.getTransaction(txHash, (error, txResult) => {
    const result = decoder.decodeData(txResult.input);
    console.log(result.method);
    console.log(result.inputs[1].toString());
    console.log(result.inputs[0]);
    // console.log(result.inputs[2].toString());
    // console.log(result.inputs[3].toString());
  });
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    console.log(txResult.logs[4].data.toString(16));
    console.log(txResult.logs[2].address);
  });
}

function unoswapV3SwapWithPermit() {
  const decoder = new InputDataDecoder(abi);
  const txHash =
    "0x845bf1c9fa5ae6eea60d6268d42dd091e67fb20f98c8b95fc225e72b9a8b037d";
  web3.eth.getTransaction(txHash, (error, txResult) => {
    const result = decoder.decodeData(txResult.input);
    console.log(result.inputs[3]);
    console.log(
      // ethers.utils.parseBytes32String(
      //   "0x00000000000000003b6d03407a809081f991ecfe0ab2727c7e90d2ad7c2e411e"
      // )

      web3.utils.hexToAscii(
        "0x3b6d03407a809081f991ecfe0ab2727c7e90d2ad7c2e411e"
      )
    );
    // console.log(result.inputs[0]);
  });
  // web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
  //   console.log(txResult.logs[4].data);
  //   console.log(txResult.logs[2].address);
  // });
}
function uniswapV3() {
  const decoder = new InputDataDecoder(abi);
  const txHash =
    "0xdd3adb300e4d9423800485f9900756731c9d811ae5decf4c5e69b3d6fa8b7e41";
  web3.eth.getTransaction(txHash, (error, txResult) => {
    const result = decoder.decodeData(txResult.input);
    console.log(result.method);
  });
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    console.log(txResult.logs[1].data);
    console.log(txResult.logs[1].address);
    console.log(txResult.logs[2].data);
    console.log(txResult.logs[0].address);
    // console.log(txResult.logs);
  });
}
function stake() {
  const decoder = new InputDataDecoder(abi);
  const txHash =
    "0xb974f030fa71ab2a3eb0739fb5d74f68fc095031fa519aec5176a393268dbf8a";
  web3.eth.getTransaction(txHash, (error, txResult) => {
    const result = decoder.decodeData(txResult.input);
    console.log(result.method);
  });
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    console.log(txResult.logs[15].address); // pool addres
    console.log(web3.utils.hexToNumberString(txResult.logs[15].data)); // token amount
  });
}
function withdraw() {
  const decoder = new InputDataDecoder(abi);
  const txHash =
    "0x4e3aef0ad2c19bd537a8c5706cd9499d70e19a48b92c666cda67ddd3e224ca74";
  web3.eth.getTransaction(txHash, (error, txResult) => {
    const result = decoder.decodeData(txResult.input);
    console.log(result.method);
  });
  web3.eth.getTransactionReceipt(txHash, function (error, txResult) {
    console.log(txResult.logs[14].address); // pool addres
    console.log(web3.utils.hexToNumberString(txResult.logs[14].data)); // token amount
  });
}

unoswapV3SwapWithPermit();
