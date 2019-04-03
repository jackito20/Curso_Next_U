var Calculadora = {
  operadores :["on", "sign", "dividido", "por", "menos", "mas", "igual", "punto"],
  operaciones:[],
  resultado:0,
  numero1:null,
  pantalla:"",
  iniciarTeclado:true,

  init: function(){
    this.asignarEventos();
  },

  asignarEventos: function(){
    var teclas = document.querySelectorAll("img[class~='tecla']");

    for(var i=0; i<teclas.length; i++){
      if(teclas[i].id=="raiz")
        continue;
      teclas[i].onmousedown =this.teclaPress;
      teclas[i].onmouseup =this.teclaOver;
    }
  },

  teclaPress:function(event){
    if(event.target.id!="mas")
      event.target.className="teclaPress";
    else {
      event.target.className="masPress";
    }
    Calculadora.validarTecla(this);
  },

  teclaOver:function(event){
    event.target.className="tecla";
  },

  validarTecla: function(elemento){
    console.log(this.operaciones)
    this.pantalla = document.getElementById("display");
    if(((this.pantalla.innerHTML=="0" && elemento.id!="0")||this.iniciarTeclado) && this.operadores.indexOf(elemento.id)<0){
      this.pantalla.innerHTML = elemento.id;
      this.operaciones.push(Number(this.pantalla.innerHTML));
      this.iniciarTeclado=false;
    }else if(this.operadores.indexOf(elemento.id)<0 && this.pantalla.innerHTML.length < 8){
      this.pantalla.innerHTML = this.pantalla.innerHTML + elemento.id;
      this.operaciones[this.operaciones.length-1] =Number(this.pantalla.innerHTML);
    }else{
      this.validarOperacion(elemento);
    }

  },
  validarOperacion: function(elemento){
    switch (elemento.id) {
      case "on":
        this.pantalla.innerHTML = "0";
        this.iniciarTeclado=true;
        this.operaciones=[];
        this.resultado=0;
        this.numero1=null;
        break;
      case "punto":
        this.pantalla.innerHTML = !this.pantalla.innerHTML.includes(".") ? this.pantalla.innerHTML + "." : this.pantalla.innerHTML;
        this.operaciones[this.operaciones.length-1] =Number(this.pantalla.innerHTML);
        break;
      case "sign":
        if(this.pantalla.innerHTML!="0"){
          this.pantalla.innerHTML = !this.pantalla.innerHTML.includes("-") ? "-" + this.pantalla.innerHTML : this.pantalla.innerHTML.slice(1, this.pantalla.innerHTML.length);
          this.operaciones[this.operaciones.length-1] =Number(this.pantalla.innerHTML);
        }
        break;
      case "igual":
        if(this.operaciones[this.operaciones.length-2]=="igual"){
          this.operaciones.push(this.operaciones[this.operaciones.length-4]);
          this.operaciones.push(this.operaciones[this.operaciones.length-4]);
        }
        this.operar();
        this.pantalla.innerHTML = this.resultado.toString().length<=8 ? this.resultado : this.resultado.toString().slice(0,7)+"e";
        this.iniciarTeclado=true;
        this.operaciones.push("igual");
        this.operaciones.push(this.resultado);
        break;
      default:
        this.operaciones.push(elemento.id);
        this.iniciarTeclado=true;
        break;
    }
  },

  operar: function(){

    for(var index=0; index<this.operaciones.length; index++){
      switch (this.operaciones[index]) {
        case "mas":
          index=this.sumar(index);
          break;
        case "menos":
          index=this.resta(index);
          break;
        case "por":
            index= this.multiplicar(index);
            break;
        case "dividido":
            index= this.dividir(index);
            break;
        default:
          if(index==0){
            this.numero1=this.operaciones[index];
            console.log("Estableciendo numero1= "+this.numero1)
          }
          break;
      }
    }
  },

  sumar: function(index){
    console.log("Sumando...");
    if(typeof this.operaciones[index+1] == "number"){
      this.sumando(index);
      index++;
    }else if(index+1==this.operaciones.length){
      this.operaciones.push(Number(this.pantalla.innerHTML))
      this.sumando(index);
      index++;
    }
    return index;
  },

  sumando: function(index){
    console.log("Suma: resultado="+this.numero1+"+"+this.operaciones[index+1]);
    this.resultado=this.numero1+this.operaciones[index+1];
    this.numero1=this.resultado;
    console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+(index+1))
  },

  resta: function(index){
    console.log("Restando...");
    if(typeof this.operaciones[index+1] == "number"){
      this.restando(index);
      index++;
    }else if(index+1==this.operaciones.length){
      this.operaciones.push(Number(this.pantalla.innerHTML))
      this.restando(index);
      index++;
    }
    return index;
  },

  restando: function(index){
    console.log("Resta: resultado="+this.numero1+"-"+this.operaciones[index+1]);
    this.resultado=this.numero1-this.operaciones[index+1];
    this.numero1=this.resultado;
    console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+(index+1));
  },

  multiplicar: function(index){
    console.log("Multiplicando...");
    if(typeof this.operaciones[index+1] == "number"){
      this.multiplicando(index);
      index++;
    } else if(index+1==this.operaciones.length){
      this.operaciones.push(Number(this.pantalla.innerHTML))
      this.multiplicando(index);
      index++;
    }
    return index;
  },

  multiplicando: function(index){
    console.log("Multiplicacion: resultado="+this.numero1+"*"+this.operaciones[index+1]);
    this.resultado=this.numero1*this.operaciones[index+1];
    this.numero1=this.resultado;
    console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+(index+1));
  },

  dividir: function(index){
    console.log("Dividiendo...");
    if(typeof this.operaciones[index+1] == "number"){
      this.dividiendo(index);
      index++;
    } else if(index+1==this.operaciones.length){
      this.operaciones.push(Number(this.pantalla.innerHTML))
      this.dividiendo(index);
      index++;
    }
    return index;
  },

  dividiendo: function(index){
    console.log("Division: resultado="+this.numero1+"/"+this.operaciones[index+1]);
    this.resultado=this.numero1/this.operaciones[index+1];
    this.numero1=this.resultado;
    console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+(index+1));
  }

}

Calculadora.init();
