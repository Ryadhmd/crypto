// hardhat.config.js

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 

 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");
 
 // TASK D'INSERTION
 /*task("insert", "insert a block")
  .addPositionalParam("hash","hash de la fonction")
  .addPositionalParam("jwt","token jwt")
  .setAction(async (taskArgs,hre) => {
   	const address = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
	const Box = await ethers.getContractFactory('Box');
	const box = await Box.attach(address);
	
	await box.store(taskArgs.hash,taskArgs.jwt);
  }); */
  
  // TASK DE VERIFICATION 
 /*task("verify-private", "verify but modified")
 .addPositionalParam("hash","hash recherché")
 .setAction(async (taskArgs,hre) => {
 	await hre.run("verify:verify", {
 	 network: 'localhost',	
 	 address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
 	 constructorArguments: [ taskArgs.hash ] });
 }); */

 module.exports = {
  solidity: "0.8.0",
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    tasks: "./tasks"
  },
  
};
