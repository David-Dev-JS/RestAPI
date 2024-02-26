const { cekKey, lessLimit } = require('../database/db');
const GPT = require('../lib/chatgpt');

async function ChatGPT(req, res) {
    const query = req.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    GPT(query).then(result => {
        res.status(200).send({
            status: 200, 
            creator: "David XD",
            result: result
        });
        lessLimit(apikey, 1);
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            creator: "David XD",
            message: 'Internal Server Error'
        })
    });
}

module.exports = ChatGPT;