const express = require('express');

const router = express.Router();

router.use('/grades',(req, res)=>{
    res.send("Grades..");
});

module.exports = router;