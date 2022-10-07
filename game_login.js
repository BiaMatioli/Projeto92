function AddPlayer() {
    nomeP1 = document.getElementById("nomeP1").value;
    nomeP2 = document.getElementById("nomeP2").value;
    localStorage.setItem("nomeP1", nomeP1);
    localStorage.setItem("nomeP2", nomeP2);
    window.location = "game_page.html";
}
