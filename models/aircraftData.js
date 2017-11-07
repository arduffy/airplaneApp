var mongoose = require('mongoose');

var ClmbDataSchema = new mongoose.Schema({
    weight: Number,
    vfriflap5: Number,
    vfriflap10: Number,
    vfriflap15: Number,
    vclmb: Number
});
mongoose.model('ClmbData', ClmbDataSchema, 'ClmbData');

var TakeoffSchema = new mongoose.Schema({
	flaps: Number,
	weight: Number,
	above20: Boolean,
	altitude: Number,
	vr: Number,
	v2: Number,
});

mongoose.model('TakeoffData', TakeoffSchema, 'TakeoffData');

var LandingSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	vapp: Number,
	vref: Number,
	vga: Number,
});

mongoose.model('LandingData', LandingSchema, 'LandingData');