// Test pour voir si la page JS est bien appelée
// console.log('connecté');


// PAGE INDEX ----------------------------------
// Apparition d'un texte au scroll
window.addEventListener('scroll', apparitionTexte)
    // console.log('defilement détécté');

let appear = document.querySelector('.appear');
let appear2 = document.querySelector('.appear2');
let hauteur;

    function apparitionTexte(){
        hauteur = document.documentElement.scrollTop;
        // console.log(hauteur, 'nombre de pixels depuis le haut de la page');

// Boucles pour vérifier si les classes appear et appear2 sont présentes dans la page :
        if (document.querySelector('.appear')){ 
            if (hauteur > 280) {
                // console.log('affichage du texte');
                appear.classList.add('appear-visible');
            }
        }
        if (document.querySelector('.appear2')){
            if (hauteur > 900) {
                // console.log('affichage du texte');
                appear2.classList.add('appear-visible2');
            }
        }
    };



// PAGE AGENDA -----------------------------------
// Fonction pour mettre la première lettre en majuscule, elle sert pour l'API mais je l'ai mise ici car elle peut être utile ailleurs
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
};



// PAGE FAQ -------------------------------------
const questions = document.querySelectorAll('.question');
// console.log(questions);

// => Façon simplifiée pour écrire les fonctions anonymes, les fonctions fléchées sont des fonctions sans le mot clé function
questions.forEach((item) => {
    // console.log('item');
// Chaque élément du tableau est représenté par item
// Maintenant chaque élément du tableau (item) est soumis à une action au clic
    item.addEventListener('click', function(){
        // console.log('item cliqué');
// je sélectionne et stocke la DIV suivante de l'item cliqué
        const next = item.nextElementSibling;
        // console.log(next);
// Je rends visible ou invisible la réponse
        next.classList.toggle('reponse-visible');
// Je cible et stocke l'icône de l'item
        icone = item.lastElementChild;
        // console.log(icone);
        icone.classList.toggle('fa-circle-chevron-up');
    });
});
