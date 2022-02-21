const fs = require('fs');

const fileName = 'talker.json';

   function createTalker(req, res) {
       const { name, age, talk } = req.body;
    const data = fs.readFileSync(fileName, 'utf-8');
    const response = JSON.parse(data);
    const newData = { 
        name, 
        age,
        id: response.length + 1, 
        talk,
        };
    response.push(newData);
    fs.writeFileSync(fileName, JSON.stringify(response));
    
    return res.status(201).json(newData);
}

module.exports = createTalker;