const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))


module.exports = app => {

    // Base URLS
    app.use('/coasters', require('./coaster.routes.js'))
    app.use('/parks', require('./parks.routes.js'))
}

module.exports = router