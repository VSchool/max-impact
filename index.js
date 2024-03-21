const { server } = require("./server");


server.listen(process.env.PORT, () => {
    console.log('server listening on port ' + process.env.PORT)
})