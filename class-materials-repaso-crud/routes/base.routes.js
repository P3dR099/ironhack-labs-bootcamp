module.exports = app => {

    // Base URLS
    app.use('/', require('./coaster.routes.js'))
    app.use('/', require("./parks.routes.js"))
}