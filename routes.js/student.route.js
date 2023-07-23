let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
let studentSchema = require('../Models/students');
// CREATE Student
router.post('/create-student', async (req, res) => {

  await studentSchema.create({
    "name": req.body.name,
    "email": req.body.email,
    "age": req.body.age,
    "company":req.body.company
  })

  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "message": "Data inserted successfully"
  })
});

router.post('/get-student', async (req, res) => {

  let studentData = await studentSchema.findOne({ _id: req.body._id });  // .findOne() returns a single object

  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "data": studentData,
    "message": "Data found successfully"
  })


});

router.post('/student-list', async (req, res) => {

  let studentData = await studentSchema.find({});  // .find() returns an array which can contain multiple objects

  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "data": studentData,
    "message": "Data found successfully"
  })
});

router.post('/update-student', async (req, res) => {

  await studentSchema.updateOne({ "_id": req.body._id }, { $set: {"email": req.body.email,"company": req.body.company, "name": req.body.name, "age": req.body.age } });  // .updateOne( {key : condition} , {$set : { key : updated data }} ) updates a single object in database

  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "message": "Data updated successfully"
  })
});

router.post('/delete-student', async (req, res) => {

  await studentSchema.deleteOne({"_id": req.body._id });
  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "message": "Data removed successfully"
  })
});

module.exports = router;