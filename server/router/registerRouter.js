const router = require('express').Router();
router.get('/',(req,res)=>{
    res.send({
        message:`hello ${req.body.email} you are registered`
    });
});
module.exports=router;