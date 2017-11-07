var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controllers/airplane');
var ctrlAirportData = require('../controllers/airport');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* CLMB DATA */
router.get('/clmbData/:weight', ctrlAirplaneData.clmbDataReadOne);
router.get('/clmbData', ctrlAirplaneData.clmbDataReadAll);

/* LANDING DATA */
router.get('/landingData/:weight', ctrlAirplaneData.landingDataReadOne);

/* TAKEOFF DATA */
router.get('/takeoffData/:weight', ctrlAirplaneData.takeoffDataReadOne);

/* AIRPORT DATA */
router.get('/airportData', ctrlAirportData.airportDataReadAll);


module.exports = router;
