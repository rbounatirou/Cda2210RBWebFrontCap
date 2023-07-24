import { GlossaireDataCollection } from "./GlossaireDataCollection.js";
import { GlossaireOptionGenerator } from "./GlossaireOptionGenerator.js";
// CREATION ET CHARGEMENT DE LA COLLECTION
const collection = new GlossaireDataCollection();
await collection.load();

// CREATION DES OPTIONS POUR NOTRE LISTE DEROULANTE
const optionGenerator = new GlossaireOptionGenerator(collection);
optionGenerator.generateOptionList();

// ELEMENT DU DOM A MANIPULER
const glossaireLoadArea = document.querySelector('#glossaireLoadArea');

// CHARGEMENT DE LA PREMIERE LIGNE
loadLine(collection.getDataFromId(1));



// PERMET D'ACTUALISER LE CONTENU AU CHANGEMENT DE SELECTION DE NOTRE MENU
document.querySelector('#optionsGlossaire').addEventListener('change', e=>{
    let data = loadLine(collection.getDataFromId(e.target.value));
});

/* FONCTION POUR ACTUALISER LA LIGNE 
SE BASE SUR UNE DONNEE RENVOYE PAR LA METHODE getDataFromId
De la classe GlossaireDataCollection */
function loadLine(data){
    if (!Array.isArray(data) || data.length < 1){
        return;
    }
    glossaireLoadArea.innerHTML = data[0].corps;
}
