var axios = require("axios")
var express = require("express")
var cors = require("cors")
var app = express()


app.use(cors())


app.use(express.json())

app.all("*", (req, res) => {

    let url = req.body.url
    console.log(url)

    axios.get('https://www.youtube.com/watch?v=m5zl8NWMfWE', {
    withCredentials: true,
    })
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        console.log(error)
    });

})

  app.listen(3333, console.log("server ok"))