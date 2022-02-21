const fs = require('fs');

const fileName = 'talker.json';

   function getTalker(req, res) {
    const data = fs.readFileSync(fileName);
    const response = JSON.parse(data);
    if (!data) return res.status(200).json([]);
    return res.status(200).json(response);
}

module.exports = getTalker;