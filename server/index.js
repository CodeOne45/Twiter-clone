const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");

const app = express();


//not sure what "extended: false" is for
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//Envoyer une requette
app.get('/', (req,res) => {
    //repondre avec json
    res.json({
        message: 'yup!'
    });
});

function isValidTweet(utilisateur){
    return utilisateur.contenu.toString() !== ' '
}


//Envoyer le fichier client
app.post('/utilisateurs', (req,res,next) => {
    console.log(req.body);
    if(isValidTweet(req.body)){
        //Dans la base de données
        
        const utilisateur = {
            contenu: req.body.contenu.toString()
        };
    }
    else{
        res.status(422);
        res.json({
            message: 'Ecrivez quelque chose!'
        })
    }
});

app.listen(5000,() =>{
    console.log('Listining on http://localhost:5000');
});