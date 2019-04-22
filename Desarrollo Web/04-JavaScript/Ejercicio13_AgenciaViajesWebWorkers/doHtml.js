this.addEventListener('message', function(e){
  var usuario = JSON.parse(e.data)
  console.log(usuario)
  if(usuario[0].hasOwnProperty('ndocumento')){
    self.postMessage(true)
  }else{
    self.postMessage(false)
  }

})
