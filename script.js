function soma(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);

    var resp = document.getElementById('resp');
    var resultado = numero1 + numero2;
    resp.innerHTML = resultado;
    return resultado;
}