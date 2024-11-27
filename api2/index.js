
const EXPRESS = require("express")
const APP = EXPRESS()
const PORT = 3000
const ROUTER = EXPRESS.Router()

ROUTER.get("/", (req, res) => {
    res.send("hello this is a api2")
})

APP.use("/market-service", ROUTER)

APP.listen(PORT, () => {
    console.log(`Server running at <http://localhost:${PORT}>`);
})






