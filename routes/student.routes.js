const express = require('express');
const app = express();

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
    })
})

module.exports = studentExpressRoute;