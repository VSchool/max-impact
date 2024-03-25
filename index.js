const { init } = require('./services/cdn');
const { server } = require("./server");
const mg = require('mongoose');


mg.connect(process.env.MONGODB_URI).then((config) => {
    console.log('connected to DB:', config.connection.db.databaseName)
    server.listen(process.env.PORT, () => {
        const cdnConfig = init();
        console.log('server listening on port ' + process.env.PORT);
        console.log('initialized CDN:', cdnConfig.cloud_name)
    })
})