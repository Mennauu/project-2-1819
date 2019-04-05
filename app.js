const shrinkRay = require('shrink-ray-current')
// const compress = require('compression')
const express = require('express')
const path = require('path')
const app = express()
// const compression = require('compression')
const port = process.env.PORT || 3000

// Disable x-powered-by header
app.disable('x-powered-by')

// Compress files to brotli or gzip
app.use(shrinkRay())
// app.use(compress())

// serve static files
app.use(express.static(__dirname + '/public', {
  maxAge: "365d",
  lastModified: "",
  etag: ""
}))

// Homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))