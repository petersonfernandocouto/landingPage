var leo = document.getElementById("Leonardo");
var bruna = document.getElementById("Bruna");
var samantha = document.getElementById("Samantha");
var esquerda = document.getElementById("Esquerda");
var direita = document.getElementById("direita");

function rightbearing() {

    bruna.style="display:none"
    samantha.style="display:flex"
    direita.style="display:none"
    esquerda.style="display:flex"
}

function leftbearing(){
    samantha.style="display:none"
    bruna.style="display:flex"
    esquerda.style="display:none"
    direita.style="display:flex"

}