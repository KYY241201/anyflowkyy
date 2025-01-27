import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0xde3d55BB4ED52Ffbf0a98FDD8D5908603a8dDCF9',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'KyyAnyFlowERC20', // _name
        'KAF',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
