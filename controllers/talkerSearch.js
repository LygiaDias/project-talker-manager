const fs = require('fs');

const fileName = 'talker.json';

function talkerSearch(req, res) {
        const { q } = req.query;
        const data = fs.readFileSync(fileName);
        const response = JSON.parse(data);
        const filter = response.filter((e) => e.name.includes(q));
        if (q) return res.status(200).json(filter);
        return res.status(200).json(data);
    }

module.exports = talkerSearch;