const fs = require('fs');

const fileName = 'talker.json';

function getTalkerID(req, res) {
    const { id } = req.params;
    const dataFile = JSON.parse(fs.readFileSync(fileName));
    const data = dataFile.find((r) => r.id === Number(id));
    if (!data) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(data);
}
module.exports = getTalkerID;