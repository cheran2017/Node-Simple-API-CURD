const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.user_create = function (req, res) {
	console.log('req',req.body);
    let user = new User(
        {
            name: req.body.name,
            phone_number: req.body.phone_number,
            email: req.body.email,
        }
    );

    user.save(function (err) {
        if (err) res.send('user Creation Failed');
        // if (err) throw err;
        res.send('user Created successfully')
    })
};
exports.user_all = function (req, res) {
    User.find({}, function (err,result) {
        if (err) res.send('No Records Found');
        res.send(result);
    })
};
exports.user_details = function (req, res) {
	console.log('req',req.params);

    User.findById(req.params.id, function (err, user) {
        if (err) res.send('No user Found');
        res.send(user);
    })
};

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) res.send('user Update Failed');
        res.send('user Updated.');
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) res.send('user Delete Failed');
        res.send('user Deleted successfully!');
    })
};

