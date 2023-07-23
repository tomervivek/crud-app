let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let todoSchema = require('../Models/todo');

// CREATE TODO
router.post('/create-todo', async (req, res) => {

  await todoSchema.create({
    "todoitem": req.body.todoitem,
  })
  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "message": "Todo created successfully"
  })
});

//GET TODO
router.post('/get-todo', async (req, res) => {

  let TodoData = await todoSchema.findOne({ _id: req.body._id });  // .findOne() returns a single object

  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "data": TodoData,
    "message": "Data found successfully"
  })


});


router.post('/todo-list', async (req, res) => {

  let TodoData = await todoSchema.find({});  // .find() returns an array which can contain multiple objects

  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "data": TodoData,
    "message": "Data found successfully"
  })
});

router.post('/update-todo', async (req, res) => {

  await todoSchema.updateOne({ "_id": req.body._id }, { $set: {"todoitem": req.body.todoitem} });  // .updateOne( {key : condition} , {$set : { key : updated data }} ) updates a single object in database

  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "message": "Data updated successfully"
  })
});

router.post('/delete-todo', async (req, res) => {

  await todoSchema.deleteOne({"_id": req.body._id });
  res.status(200).send({
    "status_code": 200,
    "status": "Success",
    "message": "Data removed successfully"
  })
});

module.exports = router;