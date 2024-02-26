const google = require('google-it');
const gis = require('g-i-s');

async function googlePencarian(teksnya) {
    try {
        const results = await google({ query: teksnya });
        // Transformasi hasil ke format yang lebih bersih
        return results.map((hasil) => ({
            title: hasil.title,
            description: hasil.snippet,
            link: hasil.link,
        }));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function googleGambar(textnya) {
    try {
        gis(textnya, async(error, result) => {
            let hasil = result;
            let img = hasil;
            let hasilnya = img[Math.floor(Math.random() * img.length)].url;
            return hasilnya({
                url: hasilnya
            });
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { googlePencarian, googleGambar }