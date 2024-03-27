const { Connection, PublicKey } = require('@solana/web3.js');

// This can be updated to the appropriate network endpoint.
const network = "https://devnet.solana.com"; 

const connection = new Connection(network);

// Fetch the balance of an address
async function getBalance(address) {
    const publicKey = new PublicKey(address);
    const balance = await connection.getBalance(publicKey);
    return balance;
}

// More Solana-related functions can be added here.

module.exports = {
    getBalance,
    // Add other exports as necessary.
};
