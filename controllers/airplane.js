var mongoose = require('mongoose');
var ClimbData = mongoose.model('ClmbData');
var TakeoffData = mongoose.model('TakeoffData');
var LandingData = mongoose.model('LandingData');

//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    
/* GET all ClimbData records */
module.exports.clmbDataReadAll = function(req, res) {
    console.log("Finding all Climb Data Records", req);

    ClmbData
        .find({})
        .exec(function(err, clmbData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(clmbData);
            sendJSONresponse(res, 200, clmbData);
        });
}

/* GET ClimbData by weight */
module.exports.clmbDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        ClmbData
            .find({
                weight: req.params.weight
            })
            .exec(function(err, clmbData) {
                if (!clmbData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(clmbData);
                sendJSONresponse(res, 200, clmbData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};

/* GET LandingData by weight */
module.exports.landingDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        LandingData
            .find({
                weight: req.params.weight,
            })
            .exec(function(err, landingData) {
                if (!landingData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(landingData);
                sendJSONresponse(res, 200, landingData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};

/* GET TakeoffData by weight */
module.exports.takeOffDataReadOne = function(req, res) {
    console.log('Finding Take off Data Record', req.params);
    if (req.params && req.params.weight) {
        TakeoffData
            .find({
                weight: req.params.weight,
            })
            .exec(function(err, takeoffData) {
                if (!takeoffData) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(takeoffData);
                sendJSONresponse(res, 200, takeoffData);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};
}
