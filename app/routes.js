const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post("/wca-htl-975-new-end/recommendation/decision-post", function(req, res, next){

if(req.body['recommendation'] === 'Limited capability for work (LCW)'){
    res.redirect('/wca-htl-975-new-end/lcw');
} else if(req.body['recommendation'] === 'Limited capability for work-related activity (LCWRA)'){
res.redirect('/wca-htl-975-new-end/lcwra')
} else {
    res.redirect('/wca-htl-975-new-end/fit-for-work');
}
next();
})


router.post("/wca-htl-1023/recommendation/decision-post", function(req, res, next){

    if(req.body['recommendation'] === 'Limited capability for work (LCW)'){
        res.redirect('/wca-htl-1023/lcw');
    } else if(req.body['recommendation'] === 'Limited capability for work-related activity (LCWRA)'){
    res.redirect('/wca-htl-1023/lcwra')
    } else {
        res.redirect('/wca-htl-1023/fit-for-work');
    }
    next();
    })


// console.log('**************',req.path)
module.exports = router
