const fs = require('fs');

const fileName = 'talker.json';

   function createTalker(req, res) {
       const { name, age, talk } = req.body;
       const { id } = req.params;
       const newData = { 
        name, 
        age,
        id: Number(id), 
        talk,
        };
  const data = fs.readFileSync(fileName, 'utf-8');
    const response = JSON.parse(data);
    const editedTalker = response.findIndex((e) => e.id === Number(id));
     
    response[editedTalker] = newData;  
    
    fs.writeFileSync(fileName, JSON.stringify(response));
    
    return res.status(200).json(newData);
}

module.exports = createTalker;