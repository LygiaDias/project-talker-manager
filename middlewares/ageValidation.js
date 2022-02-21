function ageValidation(req, res, next) {
    const { age } = req.body;
    const MIN_NUMBER = 18;
    
    if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
} 
    if (parseInt(age, 10) < MIN_NUMBER) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
  
 return next();
}

module.exports = ageValidation;