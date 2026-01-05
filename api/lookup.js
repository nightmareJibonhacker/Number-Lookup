const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/api/lookup', async (req, res) => {
    try {
        const { number, token } = req.query;

        // Validate inputs
        if (!number || !token) {
            return res.status(400).json({ error: "Missing number or token" });
        }

        // Example: Use a mock database or external API here
        // For now, we simulate number info
        const numberInfo = {
            owner_name: "Jibon Rahman",
            local_number: number,
            operator: "Grameenphone",
            international_format: "+880" + number.slice(1),
            registration_type: "Prepaid",
            lookup_time: new Date().toISOString()
        };

        res.json({ success: true, data: numberInfo });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Listen for Vercel (Serverless function uses export)
module.exports = app;
