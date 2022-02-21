const express = require('express');
const getTalker = require('../controllers/getTalker');
const getTalkerId = require('../controllers/getTalkerId');
const nameValidation = require('../middlewares/nameValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const rateValidation = require('../middlewares/rateValidation');
const dateValidation = require('../middlewares/dateValidation');
const talkValidation = require('../middlewares/talkValidation');
const ageValidation = require('../middlewares/ageValidation');
const createTalker = require('../controllers/createTalker');
const talkerEdit = require('../controllers/talkerEdit');
const talkerDelete = require('../controllers/talkerDelete');

const router = express.Router();

router.get('/', getTalker);
router.get('/:id', getTalkerId);
router.post('/', 
tokenValidation,
nameValidation, 
ageValidation,
talkValidation,
rateValidation,
dateValidation,
createTalker);

router.put('/:id', 
tokenValidation,
nameValidation, 
ageValidation,
talkValidation,
rateValidation,
dateValidation,
talkerEdit);

router.delete('/:id', tokenValidation, talkerDelete);
module.exports = router;