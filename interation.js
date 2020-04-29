//1)Fonction de mise en place des écouteurs:

document.addEventListener("DOMContentLoaded", ajouterLesEcouteurs);


//2)Mise en place des écouteurs pour détecter quand l'utilisateur clique dans la zone de texte, saisit du texte, sort de la zone d'input et clique sur le bouton
function ajouterLesEcouteurs() {

    // on ajoute un écouteur lorsque l'utlisateur entre La composition d'un passage de texte a été achevée ou annulée
    document.querySelector("compose").addEventListener("compositionend", prenom);
    document.querySelector("compo").addEventListener("compositionend", nom);
    document.querySelector("num").addEventListener("compositionend", naissance);

    // on ajoute un écouteur lorsque un bouton d'un dispositif de pointage a été appuyé ou relaché sur un élément
    document.querySelector("selection").addEventListener("click", casecocher);

}

//3)Les fonctions d'actions à mener lorsque l'utilisateur interagit


// variante sur le nom de famille 

function nom (n) {

    var validation = document.getElementById ("envoi");
    var nom = document.getElementById ("name");
    var nom_m = document.getElementById ("name_manquant");
    var nom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
    name.addEventListener ("compo", nom);

    if (nom.validity.valueMissing) {
        n.preventDefault();
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

function prenom (p) {

    var validation = document.getElementById ("envoi");
    var prenom = document.getElementById ("firstname");
    var prenom_m = document.getElementById ("firstname_manquant");
    var prenom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
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

function naissance (a) {

    var validation = document.getElementById ("envoi");
    var age = document.getElementById ("age");
    var age = parseInt(prompt("Quel est votre age ?"));
    var age = new RegExp(/^0[1-68]([\.|\-|\s]*[0-9]{2}){4}$/);	
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














/*
* VAR
*/
 
let name = 'Maxence'; // String
 
let phrase = 'L\'age de Maxence est..'
 
let phrase2 = "L'age de Maxence est.."
 
const CONFIG = "242-343-343-232"; // String



let plus18ans = true;
let moins18ans = false;
 
let age = 18; /*
let age = 18.5;
let age = "18";*/
 
let firstname;
 
console.log(firstname)
 
let calcul = 18 / 3;
/*console.log(calcul);
console.info(calcul);
console.error(calcul);
console.warn(calcul);*/
 
/*
* Opérateur de comparaison
*/
 
let carte1 = 11;
let carte2 = 10;
/*
if(carte1 > carte2){
    alert('Joueur 1 a gagné')
} else {
    alert('Joueur 2 a gagné')
}*/
/*
if(carte1 > carte2){
    alert('Joueur 1 a gagné')
} else if(carte2 > carte1){
    alert('Joueur 2 a gagné')
} else if(carte2 == carte1){
    alert('Egalité')
} else {
    alert('Erreur...')
}*/
/*
for(let i = 0; i < 10; i++){
    console.log(i);
}*/
 
let mainJoueur1 = [1, 5, 3, 11, 12, 14, 3];
/*
for(let i = 0; i < mainJoueur1.length; i++){
    console.log('Carte joueur 1', mainJoueur1[i]);
}*/
 
let mainJoueur2 = [9, 2, 3, 12, 12, 10, 2];
 
/*for(let i = 0; i < mainJoueur2.length; i++){
    console.log('J1: ', mainJoueur1[i], 'J2: ', mainJoueur2[i])
}*/
 
 
let resultatMultiplication = multiplication(3, 9);
console.log(resultatMultiplication);
 
let plusUn = ajouterUn(resultatMultiplication);
console.log(plusUn);
 
function multiplication(nb1, nb2){
    return nb1 * nb2;
}
 
function ajouterUn(entree){
    let sortie = entree + 1;
    return sortie;
}
/*
let prenom =  prompt('Quel est ton prénom ? ');
 
alert('Bonjour ' + prenom + ' !');
 
let etat = prompt('La pêche aujourd\'hui ? (répond Oui/Non)');
 
if(etat == 'Oui'){
    alert('Ahhhh top !')
} else if(etat == 'Non'){
    alert('Mince..')
} else {
    alert('Répond par oui ou par non...');
}
*/
 
let _age = prompt('Quel est ton âge ?');
_age = parseInt(_age);
 
if(isNaN(_age)){
    alert('Renseigne un nombre...')
}
console.log(_age);
 
const KEY = '132432323231231';
let KEY = '132432323231231';