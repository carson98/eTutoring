const profile = require('./profile_seeder')
const account = require('./account_seeder')

async () => {
    await profile()
    await account()
    console.log("data import successful")
}
