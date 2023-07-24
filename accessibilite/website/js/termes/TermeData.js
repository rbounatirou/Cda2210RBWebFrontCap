class TermeData{
    constructor(fromObject){
        Object.assign(this, fromObject);
    }

    /* récupére l'ensemble des clés */
    getKeys(){
        return Object.keys(this);
    }

    /* récupére l'ensemble des valeurs */
    getValues(){
        return Object.values(this);
    }
}

export { TermeData };