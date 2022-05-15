// scripts/index.js
async function main () {
  // Our code will go here
  // Set up an ethers contract, representing our deployed Box instance
	const address = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
	const Box = await ethers.getContractFactory('Box');
	const box = await Box.attach(address);
	
	// Call the retrieve() function of the deployed Box contract
	// Send a transaction to store() a new value in the Box
	await box.store(23,42);

	
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
