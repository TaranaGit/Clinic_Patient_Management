const patientDB = require('../models/patientDBModel');
const mongoose = require('mongoose');

//get all patient information
const getPatient = async(req, res)=>{
    try {
        const patients = await patientDB.find({});
        res.status(200).json(patients);
        // res.status(200).json({msg:' All good so far from backend'});
    } catch (error) {
        console.error("Error fetching patients:", error);
        res.status(500).json({ error: "Failed to fetch patients" });
    }
};
//get a single patient
const onePatient = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro:'ID doen not exist!!'})
    }
    const patient = await patientDB.findById(id);
    if(!patient){
        res.status(404).json({error:'No patient exists'})
    }
    res.status(200).json(patient);
}

// craete a new patient
const createPatient = async(req, res) =>{
    const{name, address, phone} = req.body
    // console.log(req.body)
    // let address = req.body.address;
    // console.log(address);
    // let name = req.body.name;
    // console.log(name,address, phone);
    // add to DB
    try{
        const patient = await patientDB.create({name, address,phone});
        res.status(200).json(patient);
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
}
//delete a single patient
const deletePatient = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro:'ID doen not exist!!'})
    }
    const patient = await patientDB.findByIdAndDelete({_id:id});
    if(!patient){
        res.status(404).json({error:'No patient exists'})
    }
    res.status(200).json(patient);
}

//Update a single patient
const updatePatient = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erro:'ID doen not exist!!'})
    }
    const patient = await patientDB.findByIdAndUpdate({_id:id}, {...req.body});
    if(!patient){
        res.status(404).json({error:'No patient exists'})
    }
    res.status(200).json(patient);
}

module.exports = {getPatient, onePatient,createPatient,updatePatient,deletePatient}