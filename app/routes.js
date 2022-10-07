const express = require('express')
const router = express.Router()
const urlsByTab = require('./data/urlsByTab');

// Add your routes here - above the module.exports line

router.all("*", (req, res, next) => {
    console.log(req.body)
    if(typeof req.session.data.recentPages === 'undefined') {
        req.session.data.recentPages = {
            review: 'evidence-used',
            activities: 'preparingfood'
        }
    }
    const urlEnd = req.originalUrl.split('/').pop();
    Object.entries(urlsByTab).forEach(([k, v]) => {
        if(v.includes(urlEnd)) {
            req.session.data.recentPages[k] = urlEnd; 
        }
    });
    res.locals.activeUrl = urlEnd;
    return next();
})




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

router.post("/wca-version-1-1/recommendation/decision-post", function(req, res, next){

    if(req.body['recommendation'] === 'Limited capability for work (LCW)'){
        res.redirect('/wca-version-1-1/lcw');
    } else if(req.body['recommendation'] === 'Limited capability for work-related activity (LCWRA)'){
    res.redirect('/wca-version-1-1/lcwra')
    } else {
        res.redirect('/wca-version-1-1/fit-for-work');
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

    router.post("/wca-htl-1023-v4/recommendation/decision-post", function(req, res, next){

        if(req.body['recommendation'] === 'Limited capability for work (LCW)'){
            res.redirect('/wca-htl-1023-v4/lcw');
        } else if(req.body['recommendation'] === 'Limited capability for work-related activity (LCWRA)'){
        res.redirect('/wca-htl-1023-v4/lcwra')
        } else {
            res.redirect('/wca-htl-1023-v4/fit-for-work');
        }
        next();
        })


    router.post("/wca-htl-1023-v5/recommendation/decision-post", function(req, res, next){

        if(req.body['recommendation'] === 'Limited capability for work (LCW)'){
            res.redirect('/wca-htl-1023-v5/lcw');
        } else if(req.body['recommendation'] === 'Limited capability for work-related activity (LCWRA)'){
        res.redirect('/wca-htl-1023-v5/lcwra')
        } else {
            res.redirect('/wca-htl-1023-v5/fit-for-work');
        }
        next();
        })
    
        router.post('/autosave', function (req, res, next) {
            req.session.data[req.body.field] = req.body.value;
            res.sendStatus(200);
        });

// console.log('**************',req.path)
module.exports = router
