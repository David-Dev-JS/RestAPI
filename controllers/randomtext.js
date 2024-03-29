const { cekKey } = require('../database/db');
const { readFileTxt, readFileJson } = require('../lib/function');

async function cakLontong(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileJson('./lib/data/caklontong.json').then(result => {
        res.status(200).send({
            status: 200, 
            creator: "David XD",
            question: result.quiz, 
            answer: result.answer, 
            detail: result.detail
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function tebakbucin(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileJson('./lib/data/tebakbucin.json').then(result => {
        res.status(200).send({
            status: 200, 
            creator: "David XD",
            question: result.pertanyaan, 
            answer: result.jawaban
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function quotes(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileJson('./lib/data/quotes.json').then(result => {
        res.status(200).send({
            status: 200, 
            creator: "David XD",
            quotes: result.quotes, 
            author: result.author
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function fakta(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileTxt('./lib/data/fakta.txt').then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            creator: "David XD", 
            message: 'Internal Server Error'
        });
    });
}

async function bijak(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey)
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileTxt('./lib/data/bijak.txt').then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500, 
            creator: "David XD",
            message: 'Internal Server Error'
        });
    });
}

async function ptl(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileTxt('./lib/data/ptl.txt').then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500, 
            message: 'Internal Server Error'
        });
    });
}

async function motivasi(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileTxt('./lib/data/motivasi.txt').then(result => {
        res.status(200).send({status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500, 
            creator: "David XD",
            message: 'Internal Server Error'
        });
    });
}

async function cyberspace(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        creator: "David XD",
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey)
    if (!check) return res.status(403).send({
        status: 403,
        creator: "David XD",
        message: `apikey ${apikey} not found, please register first!`
    });
    readFileTxt('./lib/data/cyberspace.txt').then(result => {
        res.status(200).send({
            status: 200, 
            creator: "David XD",
            result: result
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            creator: "David XD",
            message: 'Internal Server Error'
        });
    });
}

module.exports = {cakLontong, tebakbucin, quotes, bijak, fakta, ptl, motivasi, cyberspace };
