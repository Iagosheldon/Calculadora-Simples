function calcular(n1, n2) {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    selector = document.getElementById("selector").value
    res = n1 && n2
    if (Number.isNaN(res)) {
        document.getElementById('resultado').innerHTML = `Adicione um número`

    }
    else {
        switch (selector) {
            case "+":
                calculo = n1 + n2
                document.getElementById("resultado").innerHTML = `${n1} + ${n2} = ${calculo}`
                break;

            case "*":
                calculo = n1 * n2
                document.getElementById("resultado").innerHTML = `${n1} x ${n2} = ${calculo}`
                break;

            case "/":
                calculo = (n1 / n2)
                if (Number.isNaN(calculo)) {
                    document.getElementById("resultado").innerHTML = `Coloque um número divisivel`
                    break;
                }
                else {
                    document.getElementById("resultado").innerHTML = `${n1} / ${n2} = ${calculo.toFixed(2)}`
                    break;
                }

            case "-":
                calculo = n1 - n2
                document.getElementById("resultado").innerHTML = `${n1} - ${n2} = ${calculo}`
                break;
            case "%":
                calculo = (n1 * n2) / 100
                document.getElementById("resultado").innerHTML = `${n1} % ${n2} = ${calculo}%`

        }
    }
}