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
        this.operar();
        this.pantalla.innerHTML = this.resultado;
        this.iniciarTeclado=true;
        this.operaciones.push("igual");
        this.operaciones.push(this.resultado);
        break;
      default:
        this.operaciones.push(elemento.id);
        this.iniciarTeclado=true;
        //this.pantalla.innerHTML = "0";
        break;
    }
  },
//[1, "mas", 2, "menos", 3]
  operar: function(){

    for(var index=0; index<this.operaciones.length; index++){
      switch (this.operaciones[index]) {
        case "mas":
          console.log("Sumando...");
          if(typeof this.operaciones[index+1] == "number"){
            this.sumando(index);
            index++;
          }else if(index+1==this.operaciones.length){
            this.operaciones.push(Number(this.pantalla.innerHTML))
            this.sumando(index);
            index++;
          }
          break;
        case "menos":
          console.log("Restando...");
          if(typeof this.operaciones[index+1] == "number"){
            console.log("Resta: resultado="+this.numero1+"-"+this.operaciones[index+1]);
            this.resultado=this.numero1-this.operaciones[index+1];
            this.numero1=this.resultado;
            index++;
            console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+index);
          }
          break;
        case "por":
            console.log("Multiplicando...");
            if(typeof this.operaciones[index+1] == "number"){
              console.log("Multiplicacion: resultado="+this.numero1+"*"+this.operaciones[index+1]);
              this.resultado=this.numero1*this.operaciones[index+1];
              this.numero1=this.resultado;
              console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+index);
              index++;
            }
            break;
        case "dividido":
            console.log("Dividiendo...");
            if(typeof this.operaciones[index+1] == "number"){
              console.log("Division: resultado="+this.numero1+"/"+this.operaciones[index+1]);
              this.resultado=this.numero1/this.operaciones[index+1];
              this.numero1=this.resultado;
              index++;
              console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+index);
            }
            break;
        default:
          if(index==0){
            this.numero1=this.operaciones[index];
            console.log("Estableciendo numero1= "+this.numero1)
          }else if(this.operaciones[index]=="igual"){
            this.operaciones.push(this.operaciones[index-2]);
            this.operaciones.push(this.operaciones[index-1]);
          }
          break;
      }
    }
  },

  sumando: function(index){
    console.log("Suma: resultado="+this.numero1+"+"+this.operaciones[index+1]);
    this.resultado=this.numero1+this.operaciones[index+1];
    this.numero1=this.resultado;
    console.log("resultado="+this.resultado+"  /   numero1="+this.numero1+" / index="+index+1)
  }
}

Calculadora.init();
