function emailValidation(req, res, next) {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    const regexValidation = emailRegex.test(email);
    if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
} 

if (!regexValidation) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
}

return next();
}

module.exports = emailValidation;