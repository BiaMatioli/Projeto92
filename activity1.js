placar = 0;

function AtualizarPont() {
    placar = placar + 1;
    document.getElementById("Placar").innerHTML = placar;
}

function SalvarPont() {
    localStorage.setItem("Placar", placar);
}

function ProxPag() {
    window.location = "activity_2.html";
}

