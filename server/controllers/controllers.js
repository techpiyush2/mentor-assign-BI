const MentorModel = require('../models/mentorSchema')
const StudentModel = require('../models/studentSchema')

module.exports.createMentor = async(req,res) => {
   try {
    const {name} = req.body
    if(!name || name === " "){
       return res.status(400).json({error : "please enter grocery item"})
    }
    const newMentor = await MentorModel.create({name});
    res.status(201).json({message : "Added"})
   } catch (error) {
    res.status(500).json({error : error.message})
   }
}
module.exports.createStudent = async(req,res) => {
   try {
    const {name} = req.body
    if(!name || name === " "){
       return res.status(400).json({error : "please enter grocery item"})
    }
    const newGrocery = await StudentModel.create({name});
    res.status(201).json({message : "Added"})
   } catch (error) {
    res.status(500).json({error : error.message})
   }
}

module.exports.getMentor = async (req,res) => {
    try {
     const allGrocery = await MentorModel.find();
     res.status(200).json(allGrocery)
    } catch (error) {
     res.status(500).json({error : error.message})
    }
 }
 module.exports.getStudent = async (req,res) => {
   try {
    const allGrocery = await StudentModel.find();
    res.status(200).json(allGrocery)
   } catch (error) {
    res.status(500).json({error : error.message})
   }
}
 
 module.exports.deleteUser = async(req,res) => {
    try {
     const {_id} = req.body
     if(_id){
        const deletegrocery = await GroceryModel.findByIdAndDelete(_id) 
        return res.status(201).json({message : "Deleted"})
     }else{
        res.status(400).json({error : "please enter details"})
     }
    }
    catch (error) {
     res.status(500).json({error : error.message})
    }
 }