const fs = require("fs")
const path = require("path")

let array1 = fs.readFileSync(path.resolve(__dirname, "../Base de datos/Faq.JSON"), "utf8")
let array = JSON.parse(array1)

let respuesta = "Preguntas Frecuentes"
respuesta += "Preguntas Totales: " + array.length
array.forEach(x => respuesta += `\n\nP: ${x.faq_title} \nR: ${x.faq_answer} \n\n
-------------------------------------------------------------------------------------------------------------------------------`)


module.exports = respuesta;
