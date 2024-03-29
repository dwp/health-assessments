const express = require('express')
const router = express.Router()
const urlsByTab = require('./data/urlsByTab');

// Add your routes here - above the module.exports line

router.all("*", (req, res, next) => {
    if(typeof req.session.data.recentPages === 'undefined') {
        req.session.data.recentPages = {
            review: 'evidence-used',
            activities: 'preparingfood',
             combined: 'evidence-used',
            documents: 'claimant-documents-buttons'
        }
    }
    const urlEnd = req.originalUrl.split('/').pop();
    Object.entries(urlsByTab).forEach(([k, v]) => {
        if(v.includes(urlEnd)) {
            req.session.data.currentTab = k;
            req.session.data.recentPages[k] = urlEnd; 
            if(k !== 'documents') {
                req.session.data.recentPages.combined = urlEnd;
            }


        }
    });
    res.locals.activeUrl = urlEnd;
    return next();
})

router.all('*pip-htl-1606*', (req, res, next) => {
    res.locals.containerClasses = 'full-width-container'
    return next();
})

router.all('*pip-htl-1659*', (req, res, next) => {
    res.locals.containerClasses = 'full-width-container'
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
            let now = new Date();
            req.session.data[req.body.field] = req.body.value;
            req.session.data.lastSaved = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
            res.status(200).json({});
        });

        // router.post('/autosave', function (req, res, next) {
        //     req.session.data[req.body.field] = req.body.value;
        //     res.sendStatus(200);
        // });

// console.log('**************',req.path)


// router.post('/historyofcondition-check', (req, res, next) => {
//     const { data } = req.session;
//     const condition = data.condition;
    
//     if(condition.id) {
//     amendCondition(data.conditionOrder, condition);
//     } else {
//     // give condition an id - to find in amend step
//     condition.id = data.conditionOrder.length + 1;
//     data.conditionOrder.push(condition);
//     }
    
//     res.render('condition/check-order.njk', { condition: data.condition });
//     })



    router.post('/recommendation-builder/assessments/pip-htl-1659-v2/historyofcondition',(req, res, next)=>{
        console.log(req.path)
        next()
    }, (req, res, next) => {
        const { data } = req.session;
        if(req.session.data.conditions){
            req.session.data.conditions.push({
                key:{text:req.body['condition-name']},
                value:{text:req.body['condition-history']},
                actions: {
                    items: [
                      {
                        href: "#",
                        text: "Change",
                        visuallyHiddenText: "name"
                      }
                    ]
                  }
            })
        } else {
            req.session.data.conditions=[{
                key:{text:req.body['condition-name']},
                value:{text:req.body['condition-history']},
                actions: {
                    items: [
                      {
                        href: "#",
                        text: "Change",
                        visuallyHiddenText: "name"
                      }
                    ]
                  }
            }];
        }
        
        // console.log('*****',req.session.data.conditions)
        // console.log('*****',req.session)
        res.redirect('historyofcondition-check.html');
        })



module.exports = router


