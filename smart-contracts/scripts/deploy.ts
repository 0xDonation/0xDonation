import { ethers, upgrades } from "hardhat";

async function main() {

  const Donation = await ethers.getContractFactory('Donation');
  const donation = await upgrades.deployProxy(Donation, [10]);
  await donation.waitForDeployment();
  console.log("Donation deployed to:", await donation.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
