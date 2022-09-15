const express = require('express');
const {createMentor,createStudent,getStudent,deleteUser,getMentor} = require('../controllers/controllers')

const router = express.Router();

router.get('/getmentor',getMentor)
router.get('/getstudent',getStudent)
router.post('/createstudent',createStudent)
router.post('/creatementor',createMentor)
router.post('/delete',deleteUser)

module.exports = router