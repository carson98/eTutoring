var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const seeder = require('mongoose-seed');
const async = require('async');
const Profiles = require('../models/Profiles');
const _ = require('lodash');
var faker = require('faker');
var config = require('../config.json')["development"]
require('../models/Accounts');

module.exports = new Promise((resolve) => {
    mongoose.connect(config.dbUrl, {
        useMongoClient: true,
        promiseLibrary: require('bluebird')
    });
    async.parallel([
        (callback) => {
            Profiles.find({})
            .exec((err, profile_ids) => {
                callback(null, profile_ids);
            });
        }
    ], 
    (err, results) => {
        resolve(results);
        mongoose.connection.close();
    });
}).then((results) => {
    return new Promise((resolve) => {
        let items = [];
        let status = [1, 2]
        for(i=0; i< 10; i++){
            items.push(
                {
                    username : faker.internet.userName(),
                    password : faker.internet.password(),
                    profile_id : _.sample(results[0])._id,
                    role: faker.random.arrayElement(["student", "tutor"])
                }
            );
        }
        resolve(items);
    });
}).then((items) => {
    seeder.connect(config.dbUrl, () => {
        let data = [{
            'model': 'Accounts',
            'documents': items
        }]
        seeder.loadModels([
           '../models/Accounts'
        ]);
        seeder.clearModels(['Accounts'], () => {
            seeder.populateModels(data, () => {
            seeder.disconnect();
            });
        });
     });
});
