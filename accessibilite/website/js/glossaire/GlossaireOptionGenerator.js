import { GlossaireData } from "./GlossaireData.js";
import { GlossaireDataCollection } from "./GlossaireDataCollection.js";

class GlossaireOptionGenerator{
    /**
     * CONSTRUCTEUR DE LA CLASSE
     * @param {GlossaireDataCollection} element 
     */
    constructor(collection){
        this.collection = collection;
        this.selectTag = document.querySelector('#optionsGlossaire');
    }

    /**
     * GENERE LES OPTIONS
     */
    generateOptionList(){
        this.selectTag.innerHTML = "";
        this.collection.data.forEach(d => {
            let opt = this.generateOption(d);
            this.selectTag.appendChild(opt);
        });
    }

    /**
     * GENERE UNE OPTION RELATIVEMENT AU PARAMETRE D'ENTREE
     * @param {GlossaireData} data 
     */
    generateOption(data){
        let option = document.createElement('option');
        option.innerHTML = data.titre;
        option.value = data.id;
        return option;
    }
}

export { GlossaireOptionGenerator };