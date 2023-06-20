async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy("Hello World!");
  console.log("Contract deployed to address:", hello_world.address);
}
//0xC218623BD838340b02e9fbE5587D94929b009041
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
