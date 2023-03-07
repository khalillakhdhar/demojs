function afficher()
{
n=document.getElementById("nom").value
p=document.getElementById("prenom").value
console.log("p",p);
console.log("n",n);
//alert("le nom est "+n+" et le prénom est "+p);
//Méthode 2
alert(`le nom est ${n} et le prénom est  ${p}`)


}