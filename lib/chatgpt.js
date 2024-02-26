const axios = require("axios");

async function GPT(query) {
    try {
        const response = await axios("https://tools.revesery.com/ai/ai.php?query=" + query, {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36"
            }
        });
        const res = response.data;
        const result = res.result;
        
        return result;
    } catch (e) {
        console.error(e)
    }
}

module.exports = GPT;