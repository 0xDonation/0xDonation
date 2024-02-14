// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Donation is ReentrancyGuardUpgradeable, OwnableUpgradeable {
    mapping(address => uint) private balances;
    uint public fee;
    uint private feeFund;

    // @dev _fee is 0-1000 (0.0 - 100.0%)
    function initialize(uint _fee) external initializer {
        fee = _fee;
        __Ownable_init(msg.sender);
    }

    event Donated(
        uint indexed donateId,
        uint amount,
        string message,
        string imageUrl,
        string donorName,
        string speakerId,
        address artist
    );

    function donate(
        uint donateId,
        address artist,
        string memory donateMessage,
        string memory imageUrl,
        string memory donorName,
        string memory speakerId
    ) external payable {
        balances[artist] += msg.value * (1000 - fee) / 1000;
        feeFund += msg.value * (fee) / 1000;

        emit Donated(donateId, msg.value, donateMessage, imageUrl, donorName, speakerId, artist);
    }

    function withdrawDonates(uint _value) public nonReentrant {
        require(balances[msg.sender] > 0, "you don't have funds for withdraw");
        require(_value > 0, "value for withdraw should be > 0");
        payable(msg.sender).transfer(_value);
    }

    function withdrawAllDonates() external payable {
        withdrawDonates(balances[msg.sender]);
    }

    function withdrawFee() public onlyOwner nonReentrant {
        payable(msg.sender).transfer(feeFund);
        feeFund = 0;
    }

    function getFeeFundSize() public onlyOwner view returns (uint) {
        return feeFund;
    }
}

