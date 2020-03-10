var Account = require('../models/Accounts');

exports.login = (req, res) => {
    Account.findOne({ username: req.body.email }, (err, account) => {
        if (err)
            res.send(err)
        var password = req.body.password
        account.comparePassword(password, (err, isMatch) => {
            if (err)
                res.send(err)
            if (isMatch === true) {
                console.log(1)
                switch(account.role) {
                    case "student": 
                    res.redirect('/student/accountStudent')
                    break;
                    case "tutor": 
                    res.redirect('/tutor/tutorDashboard')
                    break;
                    case "admin": 
                    res.redirect('/')
                    break;
                }
            }
        })
    })
}