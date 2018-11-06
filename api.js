var http = require("http");
var url = require('url');

function parseTime(time)
{
    return
    {
        hour: time.getHours()
        minute: time.getMinutes()
        second: time.getSeconds()
    }
}
function unixTime(time)
{
    return
    {
        unixtime: time.getTime()
    }
}

var server = http.createServer(function (req, res)
{
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if(req.url.search('parseTime') != -1)
    {
        result = parseTime(time)
    }
    else if(req.url.search('unixTime') != -1)
    {
        results = unixTime(time)
    }

    if(result)
    {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(result))
    }
    else
    {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(server.address().port))
