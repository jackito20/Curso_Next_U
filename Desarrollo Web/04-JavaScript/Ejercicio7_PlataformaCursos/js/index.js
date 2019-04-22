function changeBackground(elementoPadre){
  if(elementoPadre.children[0]){
    elementoPadre.style.backgroundColor = "inherit";
  }else{
    elementoPadre.style.backgroundColor = "#4d62d0";
  }
}

function changeBackgroundOther(elementoPadre){
  if(elementoPadre.children[0]){
    elementoPadre.style.backgroundColor = "inherit";
  }else{
    elementoPadre.style.backgroundColor = "#149c5f";
  }
}

function changePanel(elemento){
  paneles = document.querySelectorAll("[class^='item-']");

  for(var index=0; index<paneles.length; index++){
    paneles[index].style.width="4%";
    paneles[index].style.backgroundColor="4d62d0";
    elementoHijos=paneles[index].children;
    for(var i=0; i<elementoHijos.length; i++){
      elementoHijos[i].style.display="none";
    }
  }

  elemento.style.width ="96%";
  elemento.style.backgroundColor="white";
  elementoHijos=elemento.children;
  for(var i=0; i<elementoHijos.length; i++){
    elementoHijos[i].style.display="block";
  }
}

function changeWidth(elemento){
  elemento.style.width="18%";
}


function changeWidthOther(elemento){
  elemento.style.width="20%";
}

function changeLetterSmall(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize="small";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize="small";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize="small";
}

function changeLetterLarge(){
  document.querySelectorAll("[class^=item-] h1")[0].style.fontSize="xx-large";
  document.querySelectorAll("[class^=item-] h1")[1].style.fontSize="xx-large";
  document.querySelectorAll("[class^=item-] h1")[2].style.fontSize="xx-large";
}
