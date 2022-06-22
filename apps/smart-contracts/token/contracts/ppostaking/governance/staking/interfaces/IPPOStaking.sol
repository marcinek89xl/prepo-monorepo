// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.6;

interface IPPOStaking {
  function stake(address recipient, uint256 amount) external;
}
