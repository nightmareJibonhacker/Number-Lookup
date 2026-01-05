export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { number, token } = req.query;

    if (!number || !token) {
        return res.status(400).json({ error: "Missing number or token" });
    }

    // Mock number data (replace with real DB/API later)
    const numberInfo = {
        owner_name: "Jibon Rahman",
        local_number: number,
        operator: "Grameenphone",
        international_format: "+880" + number.slice(1),
        registration_type: "Prepaid",
        lookup_time: new Date().toISOString()
    };

    res.status(200).json({ success: true, data: numberInfo });
}
