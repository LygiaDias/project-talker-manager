function talkValidation(req, res, next) {
    const { talk } = req.body;
    
  if (talk === undefined || talk.watchedAt === undefined || talk.rate === undefined) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
} 

    return next();
}

module.exports = talkValidation;