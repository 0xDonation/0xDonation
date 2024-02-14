import { ethers, upgrades } from 'hardhat';
import { expect } from 'chai';
import { Donation } from '../typechain-types';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';


describe('Donation', () => {
  let contract: Donation;
  let deployer: HardhatEthersSigner;
  let user: HardhatEthersSigner;

  beforeEach(async () => {
    [deployer, user] = await ethers.getSigners();
    const Donation = await ethers.getContractFactory('Donation', deployer);

    contract = <Donation><unknown>await upgrades.deployProxy(Donation, [10], {
      initializer: 'initialize',
      initialOwner: deployer.address,
    })

    await contract.waitForDeployment();
  })

  it('Fee is eq 10', async () => {
    expect(await contract.connect(user).fee()).to.equal(10n);
  })

  it('on donate event emitted', async () => {
    await expect(contract.connect(user).donate(1n)).to.emit(contract, 'Donated');
  })

  it('we get fee for donate', async () => {
    await contract.connect(user).donate(15n, { value: ethers.parseEther('10') });
    expect(await contract.connect(deployer).getFeeFundSize()).to.eq(ethers.parseEther('1'));
  })
})