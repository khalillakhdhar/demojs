function imc() {
    let nom = document.getElementById("nom").value;
    let poid = document.getElementById("poid").value;
    let taille = document.getElementById("taille").value;
    console.log(`nom ${nom} poid ${poid} taille ${taille}`);
    let indice = Math.round(poid / taille ** 2);


    console.log('indice', indice);
    message = `<h3>l'indice est: ${indice}</h3><br>`
    if (indice < 20) 
        message += `<div class="alert alert-warning" role="alert">
   vous êtes maigre
 </div>`
    else if(indice<=25)
    message += `<div class="alert alert-success" role="alert">
    vous êtes idéal
  </div>`
  else
  message += `<div class="alert alert-warning" role="alert">
  vous êtes en surpoid;
</div>`
document.getElementById("res").innerHTML=message;
}
