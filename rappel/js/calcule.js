function evaluation() {
    let x = document.getElementById('v1').value
    let y = document.getElementById('v2').value
    console.log(`x=${x} y=${y}`)
    let message = ''
    let somme = parseInt(x) + parseInt(y)
    let entDiv = Math.floor(x / y)
    let reste = x % y;
    let puissance= x**y;
    message = `les deux entiers sont ${x} et ${y}<br> et la somme est ${somme}<br> la division entiére est: ${entDiv}<br> et le reste: ${reste} la puissance: ${puissance}<br>`
    document.getElementById('affichage').innerHTML = message

}

