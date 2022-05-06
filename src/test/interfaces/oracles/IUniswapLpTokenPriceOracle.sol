pragma solidity ^0.8.10;

interface IUniswapLpTokenPriceOracle {
    function getUnderlyingPrice(address cToken) external view returns (uint256);

    function price(address underlying) external view returns (uint256);
}
