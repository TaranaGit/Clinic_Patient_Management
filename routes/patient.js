const express = require('express');

const {createPatient, getPatient, onePatient, deletePatient, 
updatePatient} = require('../controller/patientController'); 

const router = express.Router();
//get all patient
router.get('/', getPatient);
//get onepatient
router.get('/:id',onePatient);
// create a new patient 
router.post('/', createPatient)
// delete a patient 
router.delete('/:id', deletePatient)
//update a patient
router.patch('/:id',updatePatient);

module.exports = router;