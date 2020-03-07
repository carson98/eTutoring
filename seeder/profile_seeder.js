const seeder = require('mongoose-seed');
const faker = require('faker');
var config = require('../config.json')["development"]
require('../models/Profiles');

let items = [];
for(i=0; i < 20; i++){
    items.push(
        {
            name : faker.name.findName(),
            email : faker.internet.email(),
            phone : faker.phone.phoneNumber(),
            gender: faker.random.arrayElement(["Male", "Female"])
        }
    )
}

let data = [{
    'model': 'Profiles',
    'documents': items
}]

module.exports = seeder.connect(config.dbUrl, () => {
    seeder.loadModels([
        '../models/Profiles'
    ])
    seeder.clearModels(['Profiles'], () => {
        seeder.populateModels(data, () => {
            seeder.disconnect()
        })
    })
})