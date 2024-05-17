// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    // Enum to represent milking methods
    enum MilkingMethod { Hand, Machine }

    // Struct to store dairy information
    struct DairyRecord {
        uint256 dairyBatchNumber;
        string cowBreed;
        uint256 quantityOfMilk;
        MilkingMethod milkingMethod;
        string date;
        string time;
        string location;
    }

    // Struct to store manufacturing information
    struct ManufacturingRecord {
        uint256 manufacturingBatchNumber;
        string processesDone;
        string allergenData;
        string nutritionalInformation;
        uint256 quantity;
        string storageInstructions;
        string contentsOfPack;
        string date;
        string time;
        string location;
    }

    // Struct to store logistics information
    struct LogisticsRecord {
        uint256 logisticsBatchNumber;
        address senderAddress;
        address receiverAddress;
        string transportationMode;
        string dateOfReceiving;
        string timeOfReceiving;
        string dateOfShipping;
        string timeOfShipping;
        string locationOfReceiving;
        uint256 pincodeOfReceiving;
        string locationOfShipping;
        uint256 pincodeOfShipping;
        string additionalInformation;
    }

    // Mapping for each record type using their respective batch numbers as the key
    mapping(uint256 => DairyRecord) public dairyRecords;
    mapping(uint256 => ManufacturingRecord) public manufacturingRecords;
    mapping(uint256 => LogisticsRecord) public logisticsRecords;

    // Function to add a new DairyRecord
    function addDairyRecord(
        uint256 _dairyBatchNumber,
        string memory _cowBreed,
        uint256 _quantityOfMilk,
        MilkingMethod _milkingMethod,
        string memory _date,
        string memory _time,
        string memory _location
    ) external {
        DairyRecord memory newRecord = DairyRecord({
            dairyBatchNumber: _dairyBatchNumber,
            cowBreed: _cowBreed,
            quantityOfMilk: _quantityOfMilk,
            milkingMethod: _milkingMethod,
            date: _date,
            time: _time,
            location: _location
        });

        dairyRecords[_dairyBatchNumber] = newRecord;
    }

    // Function to add a new ManufacturingRecord
    function addManufacturingRecord(
        uint256 _manufacturingBatchNumber,
        string memory _processesDone,
        string memory _allergenData,
        string memory _nutritionalInformation,
        uint256 _quantity,
        string memory _storageInstructions,
        string memory _contentsOfPack,
        string memory _date,
        string memory _time,
        string memory _location
    ) external {
        ManufacturingRecord memory newRecord = ManufacturingRecord({
            manufacturingBatchNumber: _manufacturingBatchNumber,
            processesDone: _processesDone,
            allergenData: _allergenData,
            nutritionalInformation: _nutritionalInformation,
            quantity: _quantity,
            storageInstructions: _storageInstructions,
            contentsOfPack: _contentsOfPack,
            date: _date,
            time: _time,
            location: _location
        });

        manufacturingRecords[_manufacturingBatchNumber] = newRecord;
    }

    // Function to add a new LogisticsRecord
    function addLogisticsRecord(
        uint256 _logisticsBatchNumber,
        address _senderAddress,
        address _receiverAddress,
        string memory _transportationMode,
        string memory _dateOfReceiving,
        string memory _timeOfReceiving,
        string memory _dateOfShipping,
        string memory _timeOfShipping,
        string memory _locationOfReceiving,
        uint256 _pincodeOfReceiving,
        string memory _locationOfShipping,
        uint256 _pincodeOfShipping,
        string memory _additionalInformation
    ) external {
        LogisticsRecord memory newRecord = LogisticsRecord({
            logisticsBatchNumber: _logisticsBatchNumber,
            senderAddress: _senderAddress,
            receiverAddress: _receiverAddress,
            transportationMode: _transportationMode,
            dateOfReceiving: _dateOfReceiving,
            timeOfReceiving: _timeOfReceiving,
            dateOfShipping: _dateOfShipping,
            timeOfShipping: _timeOfShipping,
            locationOfReceiving: _locationOfReceiving,
            pincodeOfReceiving: _pincodeOfReceiving,
            locationOfShipping: _locationOfShipping,
            pincodeOfShipping: _pincodeOfShipping,
            additionalInformation: _additionalInformation
        });

        logisticsRecords[_logisticsBatchNumber] = newRecord;
    }

    // Function to get combined supply chain data for a given batch number
    function getSupplyChainData(uint256 _batchNumber)
        external
        view
        returns (
            DairyRecord memory dairyData,
            ManufacturingRecord memory manufacturingData,
            LogisticsRecord memory logisticsData
        )
    {
        dairyData = dairyRecords[_batchNumber];
        manufacturingData = manufacturingRecords[_batchNumber];
        logisticsData = logisticsRecords[_batchNumber];

        return (dairyData, manufacturingData, logisticsData);
    }
}
