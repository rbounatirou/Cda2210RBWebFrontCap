class DataLoader{
    /*
    Renvoie les données de la source sous un format JSON
    */
    static async LoadFromSource(source){
        let data = await fetch(source);
        return await data.json();
    }
}

export { DataLoader };