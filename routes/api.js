const express = require('express');
const router = express.Router();
const { cekKey } = require('../database/db'); 
const BardAi = require('../controllers/bard');
const ChatGPT = require('../controllers/gpt');
const googleSearch = require('../controllers/google');
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const { cakLontong, tebakbucin, bijak, quotes, fakta, ptl, motivasi, cyberspace } = require('../controllers/randomtext');
const { igstalk, igdownload } = require('../controllers/ig');

router.get('/checkkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) {
        return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
    }

    const check = await cekKey(apikey);
    if (!check) {
        return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
    }

    const responseMessage = {
        status: 200,
        apikey: apikey,
        userStatus: check.status,
        limit: check.limit,
        message: `Your account is ${check.status}. ${check.limit === 'Infinity' ? 'You have unlimited access.' : 'Remaining limit: ' + check.limit}`
    };

    res.send(responseMessage);
});

router.get('/ai/bard', BardAi);

router.get('/ai/chatgpt', ChatGPT);

router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);

router.get('/search/googlePencarian', googleSearch);

router.get('/caklontong', cakLontong);

router.get('/tebakbucin', tebakbucin);

router.get('/quotes', quotes);

router.get('/fakta', fakta);

router.get('/bijak', bijak);

router.get('/ptl', ptl);

router.get('/motivasi', motivasi);

router.get('/igstalk', igstalk);

router.get('/igdl', igdownload);

module.exports = router;
