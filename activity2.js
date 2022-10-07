function voltar() {
    window.location = "activity_1.html";
}

function updatePlacar() {
    atualizarPlacar = localStorage.getItem("Placar");
    document.getElementById("update").innerHTML = "<h1>Pontuação: " + atualizarPlacar + "</h1>";
}