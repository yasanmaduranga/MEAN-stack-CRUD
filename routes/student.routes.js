const express = require('express');
// const app = express();

const studentExpressRoute = express.Router();
let StudentSchema = require('../model/student.model');

studentExpressRoute.route('/').get((req,res,next)=>{
    StudentSchema.find((error,data)=>{
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

studentExpressRoute.route('/student/:id').get((req,res,next)=>{
    StudentSchema.findById(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data)
     }
    });
 });

 studentExpressRoute.route('/add-student').post((req,res,next)=>{
    StudentSchema.create(req.body,(error, data) =>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
});
});

studentExpressRoute.route('/del-student/:id').delete((req,res,next)=>{
    StudentSchema.findByIdAndRemove(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
        res.status(200).json({
            msg: data
        })
     }
    }) 
 })

 studentExpressRoute.route('/update-student/:id').put((req,res,next)=>{
    StudentSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data);
         console.log('Deleted Successfully!')
     }
    }) 
 })



module.exports = studentExpressRoute;