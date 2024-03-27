const express = require('express');
const router = express.Router();
const { getBalance } = require('../solana');

router.get('/:address', async (req, res) => {
    try {
        const address = req.params.address;
        const balance = await getBalance(address);
        res.json({ balance });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch balance' });
    }
});

module.exports = router;
