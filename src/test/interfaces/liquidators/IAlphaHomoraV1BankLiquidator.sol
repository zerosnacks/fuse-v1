pragma solidity ^0.8.10;

interface AlphaHomoraV1BankLiquidator {
    function redeem(
        address inputToken,
        uint256 inputAmount,
        bytes memory strategyData
    ) external returns (address outputToken, uint256 outputAmount);
}
