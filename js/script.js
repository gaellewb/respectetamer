// Test pour voir si la page JS est bien appelée
// console.log('connecté');

// PAGE INDEX ----------------------------------

// Apparition d'un texte au scroll
window.addEventListener('scroll', apparationTexte)
    // console.log('defilement détécté');

let appear = document.querySelector('.appear');
// let exist = oElementHTML.classList.contains('appear');
let hauteur;

    function apparationTexte(){
        hauteur = document.documentElement.scrollTop;
        // console.log(hauteur, 'nombre de pixels depuis le haut de la page');

        if (document.querySelector('.appear')){
            if (hauteur > 280) {
                // console.log('affichage du texte');
                appear.classList.add('appear-visible');
            }
        }
    };


    
// Apparition de la PopUp 
// let popUp = document.getElementById('cookiePopup');
// // Qd l'utilisateur clique sur accepter :
// document.getElementById('acceptCookie').addEventListener('click', function(){
//     // console.log('bouton cliqué');
// });








// PAGE AGENDA -----------------------------------

// Fonction pour mettre la première lettre en majuscule
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
};


