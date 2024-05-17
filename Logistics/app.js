// Connect to Ethereum provider
if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  alert("Please install MetaMask or use a Web3-enabled browser.");
}

// Contract ABI (copy this from your compiled contract)
const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_dairyBatchNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_cowBreed",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_quantityOfMilk",
        type: "uint256",
      },
      {
        internalType: "enum SupplyChain.MilkingMethod",
        name: "_milkingMethod",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_date",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
    ],
    name: "addDairyRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_logisticsBatchNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_senderAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiverAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_transportationMode",
        type: "string",
      },
      {
        internalType: "string",
        name: "_dateOfReceiving",
        type: "string",
      },
      {
        internalType: "string",
        name: "_timeOfReceiving",
        type: "string",
      },
      {
        internalType: "string",
        name: "_dateOfShipping",
        type: "string",
      },
      {
        internalType: "string",
        name: "_timeOfShipping",
        type: "string",
      },
      {
        internalType: "string",
        name: "_locationOfReceiving",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pincodeOfReceiving",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_locationOfShipping",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pincodeOfShipping",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_additionalInformation",
        type: "string",
      },
    ],
    name: "addLogisticsRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_manufacturingBatchNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_processesDone",
        type: "string",
      },
      {
        internalType: "string",
        name: "_allergenData",
        type: "string",
      },
      {
        internalType: "string",
        name: "_nutritionalInformation",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_storageInstructions",
        type: "string",
      },
      {
        internalType: "string",
        name: "_contentsOfPack",
        type: "string",
      },
      {
        internalType: "string",
        name: "_date",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
    ],
    name: "addManufacturingRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dairyRecords",
    outputs: [
      {
        internalType: "uint256",
        name: "dairyBatchNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "cowBreed",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantityOfMilk",
        type: "uint256",
      },
      {
        internalType: "enum SupplyChain.MilkingMethod",
        name: "milkingMethod",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_batchNumber",
        type: "uint256",
      },
    ],
    name: "getSupplyChainData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "dairyBatchNumber",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "cowBreed",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantityOfMilk",
            type: "uint256",
          },
          {
            internalType: "enum SupplyChain.MilkingMethod",
            name: "milkingMethod",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "string",
            name: "time",
            type: "string",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
        ],
        internalType: "struct SupplyChain.DairyRecord",
        name: "dairyData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "manufacturingBatchNumber",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "processesDone",
            type: "string",
          },
          {
            internalType: "string",
            name: "allergenData",
            type: "string",
          },
          {
            internalType: "string",
            name: "nutritionalInformation",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "storageInstructions",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentsOfPack",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "string",
            name: "time",
            type: "string",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
        ],
        internalType: "struct SupplyChain.ManufacturingRecord",
        name: "manufacturingData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "logisticsBatchNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "senderAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiverAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "transportationMode",
            type: "string",
          },
          {
            internalType: "string",
            name: "dateOfReceiving",
            type: "string",
          },
          {
            internalType: "string",
            name: "timeOfReceiving",
            type: "string",
          },
          {
            internalType: "string",
            name: "dateOfShipping",
            type: "string",
          },
          {
            internalType: "string",
            name: "timeOfShipping",
            type: "string",
          },
          {
            internalType: "string",
            name: "locationOfReceiving",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "pincodeOfReceiving",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "locationOfShipping",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "pincodeOfShipping",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "additionalInformation",
            type: "string",
          },
        ],
        internalType: "struct SupplyChain.LogisticsRecord",
        name: "logisticsData",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "logisticsRecords",
    outputs: [
      {
        internalType: "uint256",
        name: "logisticsBatchNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "senderAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiverAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "transportationMode",
        type: "string",
      },
      {
        internalType: "string",
        name: "dateOfReceiving",
        type: "string",
      },
      {
        internalType: "string",
        name: "timeOfReceiving",
        type: "string",
      },
      {
        internalType: "string",
        name: "dateOfShipping",
        type: "string",
      },
      {
        internalType: "string",
        name: "timeOfShipping",
        type: "string",
      },
      {
        internalType: "string",
        name: "locationOfReceiving",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pincodeOfReceiving",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "locationOfShipping",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pincodeOfShipping",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "additionalInformation",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "manufacturingRecords",
    outputs: [
      {
        internalType: "uint256",
        name: "manufacturingBatchNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "processesDone",
        type: "string",
      },
      {
        internalType: "string",
        name: "allergenData",
        type: "string",
      },
      {
        internalType: "string",
        name: "nutritionalInformation",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "storageInstructions",
        type: "string",
      },
      {
        internalType: "string",
        name: "contentsOfPack",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]; // Paste your ABI here

// Contract address (deployed address)
const contractAddress = "0x6b8e238b176b2eA2F8c2A03c37A213f7E1FdffAa"; // Replace with your deployed contract address

// Contract instance
const supplyChainContract = new web3.eth.Contract(abi, contractAddress);

// Example function to add a dairy record
async function addLogisticsRecord() {
  try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const logisticsBatchNumber = document.getElementById("logibatch").value;
      const senderAddress = document.getElementById("sender").value;
      const receiverAddress = document.getElementById("receiver").value;
      const transportationMode = document.getElementById("transportation").value;
      const dateOfReceiving = document.getElementById("date_receiving").value;
      const timeOfReceiving = document.getElementById("time_receiving").value;
      const timeOfShipping = document.getElementById("time_shiping").value;
      const dateOfShipping = document.getElementById("date_shiping").value;
      const locationOfReceiving = document.getElementById("location_receiving").value;
      const pincodeOfReceiving = document.getElementById("pincode_receving").value;
      const additionalInformation = document.getElementById("additional").value;
      const locationOfShipping = document.getElementById("location_shiping").value;
      const pincodeOfShipping = document.getElementById("pincode_shiping").value;

      // Validate that the senderAddress is not undefined
      if (!senderAddress) {
          throw new Error("Sender address is required.");
      }

      // Call the smart contract function
      await supplyChainContract.methods
          .addLogisticsRecord(
              logisticsBatchNumber,
              senderAddress,
              receiverAddress,
              transportationMode,
              dateOfReceiving,
              timeOfReceiving,
              timeOfShipping,
              dateOfShipping,
              locationOfReceiving,
              pincodeOfReceiving,
              additionalInformation,
              locationOfShipping,
              pincodeOfShipping
          )
          .send({ from: accounts[0] });

      alert("Logistic record added successfully!");
  } catch (error) {
      console.error("Error adding logistics record:", error.message);
  }
}



  // Display the result on the webpage or use it as needed

