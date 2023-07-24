class GlossaireData{
    constructor(fromObject){
        Object.assign(this, fromObject);
        // On reassigne le titre
        this.titre = this.id + '. ' + this.titre;
    }

    /* Recupere les cles */
    getKeys(){
        return Object.keys(this);
    }

    /* Recupere les valeurs */
    getValues(){
        return Object.values(this);
    }
}

export { GlossaireData };