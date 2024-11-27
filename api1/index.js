
const EXPRESS = require("express")
const APP = EXPRESS() 
const PORT = 3000
const ROUTER = EXPRESS.Router()

ROUTER.get("/", (req, res) => {
    res.send("hello this is a api1")
})

ROUTER.get("/info", (req, res) => {
    res.send("this is a info api1 for path /info")
})

APP.use("/payment-gateway-service", ROUTER) //Context-path

APP.listen(PORT, () => {
    console.log(`Server running at <http://localhost:${PORT}>`);
})



