
var Paciente={
  nombre: "Gabriel Santos",
  ciudad: "New York",
  entidadSalud: "Salud para Ti",
  peso: 68,
  estatura: 1.76,
  fechaNacimiento: new Date(79,3,2),
  ultimaConsulta: {
    fecha: new Date(2016,5,23),
    anotaciones: ["El paciente no presenta signos de dolor en las cicatrices de la cirugía",
                   "Presión arterial media normal",
                   "Se mencionan repetidos dolores en la zona abdominal"]
  },
  historiaClinica: [
                      ["Fractura de fémur","3/11/2015"],
                      ["Apendicitis","22/8/2015"],
                      ["Insuficiencia Renal","1/3/2013"]
                    ],

  edadAproximada: function(){
    fechaActual = new Date()

    return fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
  },

  getMasaCorporal: function(){
    imc=(this.peso)/Math.pow(this.estatura, 2);
    return imc.toFixed(2);
  },

  imprimirDatos: function(){
    console.log("Nombre: "+this.nombre);
    console.log("Ciudad de residencia: "+this.ciudad);
    console.log("Entidad de Salud: "+this.entidadSalud);
    console.log("Peso: "+this.peso+" Kgs");
    console.log("Estatura: "+this.estatura+" m");
    console.log("Fecha de Nacimiento: "+this.fechaNacimiento);
    console.log("Ultima Consulta: "+this.ultimaConsulta.fecha);
    console.log("Anotaciones de Ultima Consulta: "+this.ultimaConsulta.anotaciones[0]+", "+this.ultimaConsulta.anotaciones[1]+", "+this.ultimaConsulta.anotaciones[2]);
    console.log("Historia Clinica: "+this.historiaClinica[0][0]+" - "+this.historiaClinica[0][1]+"   "+this.historiaClinica[1][0]+" - "+this.historiaClinica[1][1]+"   "+this.historiaClinica[2][0]+" - "+this.historiaClinica[2][1]);
    console.log("Edad Aproximada: "+this.edadAproximada());
    console.log("Indice de Masa Corporal: "+this.getMasaCorporal());
  }
}

document.getElementById('boton-perfil').addEventListener("click", function(){
  Paciente.imprimirDatos();
})
