const home = require("../Src/home")
const contact = require("../Src/contacto")
const faq = require("../Src/faq")
const sucursales = require("../Src/sucursales")
const votadas = require("../Src/votadas")
const cartelera = require("../Src/cartelera")

let controlador ={
home: (req, res) => res.send(home),
contact: (req, res) => res.send(contact),
faq: (req, res) => res.send(faq),
sucursales: (req, res) => res.send(sucursales),
votadas: (req, res) => res.send(votadas),
cartelera: (req, res) => res.send(cartelera)

}


module.exports = controlador;