const express = require('express');

const router = express.Router();

router.use('/salary',(req, res)=>{
    res.send("Salary..");
});

module.exports = router;