const axios = require('axios');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function googleBard(query) {
    const COOKIE = "sidts-CjEBPVxjSlTOqn_2Ubl-JmjBPcbmp5PbCqqwFOmbbluwiZxbfP2rlsX0MH6UPV6zhda6EAA";
    const psidCOOKIE = "__Secure-1PSIDTS=" + COOKIE;
    const headers = {
        "Host": "bard.google.com",
        "X-Same-Domain": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Content-Type": "application/x-www-from-urlencoded;charset=UTF-8",
        "Origin": "https://bard.google.com",
        "Referer": "https://bard.google.com",
        "Cookie": psidCOOKIE
    };

    const response = await fetch("https://bard.google.com/", {
        method: "get",
        headers
    });
    const responseMessage = await response.text();

    const [snlM0e, blValue] = [responseMessage.match(/"SNlM0e":"(.*?)"/)?.[1], responseMessage.match(/"cfb2h":"(.*?)"/)?.[1]];

    const data = `f.req=[ull,"[[\\"${encodeURIComponent(query)}\\"],null,[\\"\\",\\"\\",\\"\\"]]\"]&at=${snlM0e}`;
    const ask = await fetch(`https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?bl=${blValue}&_reqid=229189&rt=c`, {
        method: "post",
        headers,
        body: data
    });
    const result = JSON.parse(JSON.parse((await ask.text()).split("\n").reduce((a, b) => (a.length > b.length ? a : b), ""))[0][2])[4][0][1];

    return result;
}

module.exports = googleBard;