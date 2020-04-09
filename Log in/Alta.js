const Funciones = require("./Funciones/Procesos")


let usuarios = Funciones.JsonToJS()
let us1 = new Funciones.Constructora("TuMacHo", "dick99@tumacho.com", "thisIs")
let ubicacionUs = Funciones.encontrarIndex(usuarios, us1)

ubicacionUs === -1? usuarios.push(us1) : console.log(`Email ya logiado`)

Funciones.PasteToJson(us1)

