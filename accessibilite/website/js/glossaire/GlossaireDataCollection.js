import { DataLoader } from "../DataLoader.js";
import { GlossaireData } from "./GlossaireData.js";

class GlossaireDataCollection{
    constructor(){
        this.data = [];
    }

    async load(){
        let reponse = await DataLoader.LoadFromSource("/data/glossaire.json");
        let i = 0;
        this.data = reponse.glossaire.map(d=> new GlossaireData({ id: ++i, titre: d.titre, corps: d.corps}));
    }

    getDataFromId(id){
        return this.data.filter(d=>d.id == id);
    }
}

export { GlossaireDataCollection };