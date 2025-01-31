// eslint-disable no-console
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ChainId } from 'prepo-constants'
import { utils } from 'prepo-hardhat'

const { assertIsTestnetChain } = utils

const deployFunction: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
  ethers,
  getChainId,
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  console.log(
    'Running SingleStrategyController deployment script with',
    deployer,
    'as the deployer'
  )
  const currentChain = await getChainId()
  /**
   * Make sure this script is not accidentally targeted towards a production environment.
   * This can be temporarily removed if deploying to prod.
   */
  assertIsTestnetChain(currentChain as unknown as ChainId)
  // Retrieve existing non-upgradeable deployments using hardhat-deploy
  const baseToken = await ethers.getContract('MockBaseToken')
  // Deploy SingleStrategyController and configure with the Collateral vault
  const { address: strategyControllerAddress, newlyDeployed } = await deploy(
    'SingleStrategyController',
    {
      from: deployer,
      deterministicDeployment: false,
      args: [baseToken.address],
      skipIfAlreadyDeployed: true,
    }
  )
  if (newlyDeployed) {
    console.log('Deployed SingleStrategyController to', strategyControllerAddress)
  } else {
    console.log('Existing SingleStrategyController at', strategyControllerAddress)
  }
  console.log('')
}

export default deployFunction

deployFunction.tags = ['SingleStrategyController']
