// Test pour voir si la page JS est bien appelée
// console.log('connecté');

window.addEventListener('scroll', apparationTexte)
    // console.log('defilement détécté');

let appear = document.querySelector('.appear');
let appear2 = document.querySelector('.appear2');
let hauteur;

    function apparationTexte(){
        hauteur = document.documentElement.scrollTop;
        console.log(hauteur, 'nombre de pixels depuis le haut de la page');

        if (hauteur > 280) {
            // console.log('affichage du texte');
            appear.classList.add('appear-visible');
        }
        if (hauteur > 350) {
            // console.log('affichage du texte');
            appear2.classList.add('appear-visible');
        }
    }