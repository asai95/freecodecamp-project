var express = require("express")
var app = express()

app.get("/:param", (req, resp) => {
    if (Number(req.params.param)) {
        var date = new Date(parseInt(req.params.param)*1000)
        console.log(date)
    } else {var date = new Date(req.params.param)}
    if (date != "Invalid Date") {
        resp.json({unix: Date.parse(date)/1000, natural: date.toDateString()})
    } else {resp.json({unix: null, natural: null})}
    resp.end()
})

app.listen(process.env.PORT)