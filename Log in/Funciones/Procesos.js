const fs = require("fs")

let master = {
    Constructora: function (nombre, email, pass) {
        this.nombre = nombre
        this.email = email
        this.pass = pass
    },
    JsonToJS: function () {
        let leerJson = fs.readFileSync("Usuarios.JSON", "utf8")
        let arrayLista = leerJson.length === 0 ? [] : JSON.parse(leerJson)
        return arrayLista
    },
    PasteToJson: array => fs.writeFileSync("Usuarios.JSON", JSON.stringify(array, null, " ")),
    encontrarIndex: (array, usuario) => array.findIndex(elemento => elemento.email === usuario.email)   , 







}

module.exports = master;