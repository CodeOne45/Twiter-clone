
console.log('Hello world !');

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');

//Serveur local
const API_URL = 'http://localhost:5000/utilisateurs';

loadingElement.style.display = 'none';

//clic sur le button
form.addEventListener('submit', (event) => {  //accés au évnement
    
    event.preventDefault();
    //Copier le text
    const formData = new FormData(form);
    const contenu = formData.get('contenu');
    const id = 'Paris Descartes';
    //Objet utilisateur

    const utilisateur = {
        id,
        contenu 
    };
    
    //Hide form
    form.style.display = 'none';
    loadingElement.style.display = '' ;
    
    //Envoyer le data 
    fetch(API_URL,{
        headres: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        //body: JSON.stringify(utilisateur) // --> convertir en json
        body: JSON.stringify({"Data": "MY DATA"}),
    });

});
