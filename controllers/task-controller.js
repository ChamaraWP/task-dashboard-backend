  
const Task = require('../models/task-model')
const mongoose = require('mongoose')

function create(req,res,next){
    let title = req.body.title;
    let schedule = req.body.schedule;
    let description = req.body.description;
    let task = new Task({
         title,
         schedule,
         description
    })
    task.save().then((data)=>{
        res.send({status:201,data:data})
    }).catch(error => {
        res.send({status:500,data:'Error Occurred'})
    })
 }

 function view(req,res,next){
    Task.find({}).then((data)=>{
        res.status(200).send({status:200, data:data})
    }).catch(err => {
        res.status(200).send({status:500, data:'Error Occurred'})
    })
}


function findOne(req,res,next){
    Task.findOne({_id:req.params.id},req.body, (err,task)=>{
        if (err) {
            return res.status(500).send({status:500, data:"Record Not Available"})
        };
        res.status(200).send({status:200,data: task});
    })
}

function update(req,res,next){
    Task.findByIdAndUpdate({_id:req.params.id},req.body, (err,task)=>{
        if (err) {
            return res.status(500).send({status:500,data:"Update Failed"})
        };
        res.status(200).send({status:200,success: "Updated successfully,Error Occurred"});
    })
}

function remove(req,res,next){
    Task.findByIdAndDelete({_id:req.params.id}, (err,task)=>{
        if(err){
            return res.status(500).send({status:500,data: "Delete Failed.Error Occurred"})
        }
        res.send({status:200,data: 'Task deleted successfully'})
    })
}

module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove
module.exports.viewRecord = findOne;