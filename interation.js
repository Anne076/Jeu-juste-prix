var form = document.getElementById('play-form');
form.addEventListener("submit", play);

// [1] Au chargement : générer le prix aléatoire

function play(e){
    e.preventDefault();
    
    // [2] Récuper la valeur du champ input
    // [3] Transfomer en nombre

    // [4] Vérifier 
        // si c'est plus
            // Affiche "C'est plus" avec classList.toggle('display-none);
        // si c'est moins
            // Affiche "C'est moins" avec classList.toggle('display-none);
        // si c'est bon 
            // Afficher "C'est gagné !" et proposer de rejouer
}








































//1)Fonction de mise en place des écouteurs:

document.addEventListener("DOMContentLoaded", ajouterLesEcouteurs);


//2)Mise en place des écouteurs pour détecter quand l'utilisateur clique dans la zone de texte, saisit du texte, sort de la zone d'input et clique sur le bouton
function ajouterLesEcouteurs() {

    // on ajoute un écouteur lorsque l'utlisateur entre La composition d'un passage de texte a été achevée ou annulée
    document.querySelector("compose").addEventListener("compositionend", prenom);
    document.querySelector("compo").addEventListener("compositionend", nom);
    document.querySelector("num").addEventListener("compositionend", naissance);
    document.querySelector("somme").addEventListener("compositionend", article);

    // on ajoute un écouteur lorsque un bouton d'un dispositif de pointage a été appuyé ou relaché sur un élément
    document.querySelector("selection").addEventListener("click", casecocher);

}

//3)Les fonctions d'actions à mener lorsque l'utilisateur interagit


// variante sur le nom de famille 

function nom (no) {

    var validation = document.getElementById ("envoi");
    var no = document.getElementById ("name");
    var no_m = document.getElementById ("name_manquant");
    var no_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
    name.addEventListener ("compo", nom);

    if (nom.validity.valueMissing) {
        no.preventDefault();
        nom_m.textContent = "Nom Manquant";
        nom_m.style.color = "red";
    }else if (nom_v.test(nom.value) == false) {
        event.preventDefault();
        nom_m.textContent = "Format incorrect";
        nom_m.style.color = "orange";
    }else{
    }   
 
}


// variante sur le prénom 

function prenom (pren) {

    var validation = document.getElementById ("envoi");
    var pren = document.getElementById ("firstname");
    var pren_m = document.getElementById ("firstname_manquant");
    var pren_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
    firstname.addEventListener ("compose", prenom);

    if (prenom.validity.valueMissing) {
        p.preventDefault();
        prenom_m.textContent = "Prénom Manquant";
        prenom_m.style.color = "red";
    }else if (prenom_v.test(prenom.value) == false) {
        event.preventDefault();
        prenom_m.textContent = "Format incorrect";
        prenom_m.style.color = "orange";
    }else{
    }   
 
}


// variante sur age 

function naissance (na) {

    var validation = document.getElementById ("envoi");
    var na = document.getElementById ("age");
    var na = parseInt(prompt("Quel est votre age ?"));
    var na = new RegExp(/^0[1-68]([\.|\-|\s]*[0-9]{2}){4}$/);	
    var match = false;
    age.addEventListener ("num", naissance);

                    
    if (age <= 17){
        alert("vous n'etes pas encore majeur !");
    }else if (age <= 49){
        alert("vous etes majeur mais pas encore senior");
    }else if (age <=59){
        alert("vous etes senior mais pas encore a la retraite");
    }else{
        alert("vous etes retraité, profitez du temps libre!");
    }
} 


// variante sur le prix de l'article 

function article (arti) {

    var validation = document.getElementById ("envoi");
    var arti = document.getElementById ("prix");
    var arti = parseInt(prompt("Quel est votre juste prix?"));
    var arti = new RegExp(/^0[1-68]([\.|\-|\s]*[0-9]{2}){4}$/);	
    var match = false;
    prix.addEventListener ("somme",article);

                    
    if (prix <50) {
        alert("Vous êtes en dessous du juste prix !");
    }else if (prix =50) {
        alert("Bravo ! Vous avez trouvé le juste prix ! ");
    }else if (50> prix){
        alert("Vous êtes au dessus du juste prix ! ");
    }

} 
