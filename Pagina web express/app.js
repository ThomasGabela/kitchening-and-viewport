const express = require("express")
const app = express()

const router = require("./routes/indexRouter")
app.use("/", router)

app.listen(3000, () => console.log("fucnando"))
