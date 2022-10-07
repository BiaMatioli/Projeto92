nomeP1 = localStorage.getItem("nomeP1");
nomeP2 = localStorage.getItem("nomeP2");

pontuacaoP1 = 0;
pontuacaoP2 = 0;

document.getElementById("nomeP1").innerHTML = nomeP1 + ": ";
document.getElementById("nomeP2").innerHTML = nomeP2 + ": ";

document.getElementById("PontuacaoP1").innerHTML = pontuacaoP1;
document.getElementById("PontuacaoP1").innerHTML = pontuacaoP2;

document.getElementById("PlayerQuestion").innerHTML = nomeP1;
document.getElementById("PlayerAnswer").innerHTML = nomeP2;

function enviar() {
    num1 = document.getElementById("word1").value;
    num2 = document.getElementById("word2").value;
    RespostaOk = parseInt(num1) * parseInt(num2);

    Perg = "<h4>" + num1 + " X " + num2 + "</h4>";
    Resp = "<br> <input type='text' id='CaixaResp'>";
    enviarResp = "<br> <br> <button class='btn btn-info' onclick='checar()'>Checar</button>";
    divFinal = Perg + Resp + enviarResp;

    document.getElementById("output").innerHTML = divFinal;

    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}

turnoPerg = "nomeP1";
turnoResp = "nomeP2";

function checar() {
    RespInserida = document.getElementById("CaixaResp").value;

    if (RespInserida == RespostaOk) {
        if (turnoPerg == "nomeP1") {
            pontuacaoP1 = pontuacaoP1 + 1;
            document.getElementById("PontuacaoP1").innerHTML = nomeP1 + ": " + pontuacaoP1;
        }

        else {
            pontuacaoP2 = pontuacaoP2 + 1;
            document.getElementById("PontuacaoP2").innerHTML = nomeP2 + ": " + pontuacaoP2;
        }
    }

    if (turnoResp == "nomeP1") {
        turnoResp = "nomeP2";
        document.getElementById("PlayerQuestion").innerHTML = "Turno da pergunta: " + nomeP2;
    }

    else {
        turnoResp = "nomeP1";
        document.getElementById("PlayerQuestion").innerHTML = "Turno da pergunta: " + nomeP1;
    }

    document.getElementById("output").innerHTML = "";
}
