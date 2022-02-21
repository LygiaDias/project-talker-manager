const fs = require('fs');

const fileName = 'talker.json';

   function talkerEdit(req, res) {
       const { id } = req.params;
       
  const data = fs.readFileSync(fileName, 'utf-8');
    const response = JSON.parse(data);
    const filter = response.filter((e) => e.id !== Number(id));
    
    fs.writeFileSync(fileName, JSON.stringify(filter));
    
    return res.status(204).end();
}

module.exports = talkerEdit;